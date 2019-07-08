import Cryptr from 'cryptr';
import ipfsClient from 'ipfs-http-client';
import React, { Component } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';

import Navbar from '../../Components/Navbar/Navbar';
import getUport from '../../utils/getUport';

import RegistryQuiz from '../../contracts/RegistryQuiz.json';


const cryptr = new Cryptr('myTotalySecretKey');
const ipfs = ipfsClient('localhost', '5001', { protocol: 'http' });
const MainContent = styled.div`
    font-family: 'Maven Pro', sans-serif;
    text-align: center;
    margin: 4% 10%;
`;

interface IMainState {
    uport: any;
    web3: any;
    userAccount: string;
    registryQuizContract: any;
    result: string;
}
class Main extends Component<{ match: { params: { patientdid: string } } }, IMainState> {
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
            registryQuizContract: undefined as any,
            result: '',
            uport,
            userAccount: '',
            web3,
        };
    }

    public componentDidMount = () => {
        const { web3 } = this.state;
        web3.eth.getAccounts().then(async (a: string[]) => {
            const registryQuizContract = new web3.eth
                .Contract(RegistryQuiz.abi, RegistryQuiz.networks[5777].address);
            //
            const { match: { params } } = this.props;
            if (params.patientdid !== undefined) {
                const fakeCompanyDid = 'did:ethr:0x93750204a6ad2c0b685cd89ce0ba018e210d202f';
                const access = await registryQuizContract.methods
                    .accessPatientQuiz(fakeCompanyDid, params.patientdid).call();
                const quiz = await ipfs.cat(cryptr.decrypt(access));
                this.setState({
                    result: JSON.parse(cryptr.decrypt(quiz.toString())).answers,
                });
            }
            this.setState({ userAccount: a[0], registryQuizContract });
        });
    }

    /**
     * @ignore
     */
    public render() {
        const { uport, result } = this.state;
        return (
            <>
                <Navbar uport={uport} />
                <MainContent>
                    {JSON.stringify(result)}
                </MainContent>
            </>
        );
    }
}

export default Main;
