import React, { Component } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';

import Navbar from '../../Components/Navbar/Navbar';
import getUport from '../../utils/getUport';
import './main.css';
import Quiz from './Quiz';
import BasicRadarChart from './Statistics';
import Welcome from './Welcome';

import RegistryQuiz from '../../contracts/RegistryQuiz.json';
import GiveAccess from './GiveAccess';


const MainContent = styled.div`
    font-family: 'Maven Pro', sans-serif;
    text-align: center;
    margin: 4% 10%;
`;

interface IMainState {
    currentView: string;
    uport: any;
    web3: any;
    loggedIn: boolean;
    userAccount: string;
    registryQuizContract: any;
}
class Main extends Component<{}, IMainState> {
    /**
     * @ignore
     */
    constructor(props: any) {
        super(props);
        const uport = getUport();
        // uport.loadState();
        // const web3 = new Web3(uport.getProvider());
        const web3 = new Web3((window as any).ethereum);
        (window as any).ethereum.enable();
        this.state = {
            currentView: 'main',
            loggedIn: true,
            registryQuizContract: undefined as any,
            uport,
            userAccount: '',
            web3,
        };
    }

    public componentWillMount = () => {
        const { web3 } = this.state;
        web3.eth.getAccounts().then((a: string[]) => {
            const registryQuizContract = new web3.eth.Contract(RegistryQuiz.abi, RegistryQuiz.networks[5777].address);
            this.setState({ userAccount: a[0], registryQuizContract });
        });
    }

    public handleClick = (event: any) => {
        this.setState({ currentView: event.currentTarget.dataset.tag });
    }

    /**
     * @ignore
     */
    public render() {
        const { currentView, uport, loggedIn, web3, userAccount, registryQuizContract } = this.state;
        let pageContent;
        if (!loggedIn) {
            pageContent = <Welcome
                userAccount={userAccount}
                registryQuizContract={registryQuizContract}
                uport={uport}
            />;
        } else {
            if (currentView === 'quiz') {
                pageContent = <Quiz
                    uport={uport}
                    web3={web3}
                    registryQuizContract={registryQuizContract}
                    userAccount={userAccount}
                />;
            } else if (currentView === 'statistics') {
                pageContent = <BasicRadarChart />;
            } else if (currentView === 'giveaccess') {
                pageContent = <GiveAccess
                    uport={uport}
                    web3={web3}
                    registryQuizContract={registryQuizContract}
                    userAccount={userAccount}
                />;
            } else {
                pageContent = this.loadMainCards();
            }
        }
        return (
            <>
                <Navbar uport={uport} />
                <MainContent>
                    {pageContent}
                </MainContent>
            </>
        );
    }

    private loadMainCards() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td data-tag="quiz" onClick={this.handleClick}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://bulma.io/images/placeholders/1280x960.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <strong>Answer Quiz</strong>.
                                    <br />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td data-tag="giveaccess" onClick={this.handleClick}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://bulma.io/images/placeholders/1280x960.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <strong>Give Access</strong>.
                                    <br />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td data-tag="statistics" onClick={this.handleClick}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://bulma.io/images/placeholders/1280x960.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <strong>View Statistics</strong>.
                                    <br />
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Main;
