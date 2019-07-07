import React, { Component } from 'react';
import styled from 'styled-components';
import truffleContract from 'truffle-contract';
import SimpleStorageContract from '../../contracts/SimpleStorage.json';
import getWeb3 from '../../utils/getWeb3';

import Navbar from '../../Components/Navbar/Navbar';
import './main.css';
import Quiz from './Quiz';
import BasicRadarChart from './Statistics';


const MainContent = styled.div`
    font-family: 'Maven Pro', sans-serif;
    text-align: center;
    margin: 4% 10%;
`;

interface IMainState {
    currentView: string;
}
class Main extends Component<{}, IMainState> {
    /**
     * @ignore
     */
    constructor(props: any) {
        super(props);
        this.state = {
            currentView: 'main',
        };
    }

    public handleClick = (event: any) => {
        this.setState({ currentView: event.currentTarget.dataset.tag });
    }

    /**
     * @ignore
     */
    public render() {
        const { currentView } = this.state;
        const pageContent = currentView === 'quiz' ? <Quiz />
            : currentView === 'statistics' ? <BasicRadarChart /> : this.loadMainCards();
        return (
            <>
                <Navbar />
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
