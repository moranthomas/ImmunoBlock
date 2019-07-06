import React, { Component } from 'react';
import styled from 'styled-components';
import truffleContract from 'truffle-contract';
import SimpleStorageContract from '../../contracts/SimpleStorage.json';
import getWeb3 from '../../utils/getWeb3';

import Navbar from '../../Components/Navbar/Navbar';
import Quiz from './Quiz';


const MainContent = styled.div`
    font-family: 'Maven Pro', sans-serif;
    text-align: center;
    margin: 4% 10%;
`;

interface IMainState {
}
class Main extends Component<{}, IMainState> {
    /**
     * @ignore
     */
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    /**
     * @ignore
     */
    public render() {
        return (
            <>
                <Navbar />
                <MainContent>
                    <Quiz />
                </MainContent>
            </>
        );
    }
}

export default Main;
