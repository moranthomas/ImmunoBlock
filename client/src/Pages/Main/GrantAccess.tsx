import React, { Component } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';


const GrantAccessContent = styled.div`
    margin: 4% 20%;
`;
interface IGrantAccessProps {
    uport: any;
    web3: any;
    registryQuizContract: any;
    userAccount: string;
    cookies: Cookies;
}
interface IGrantAccessStatus {
    grantAccessToDid: string;
}
class GrantAccess extends Component<IGrantAccessProps, IGrantAccessStatus> {

    constructor(props: any) {
        super(props);
        this.state = {
            grantAccessToDid: '',
        };
    }

    public handleGrantAccessChange = (event: any) => {
        this.setState({ grantAccessToDid: event.target.value });
    }

    public submitGrantAccess = (event: any) => {
        const { grantAccessToDid } = this.state;
        const { registryQuizContract, userAccount, cookies } = this.props;
        registryQuizContract.methods.grantAccess(cookies.get('did'), grantAccessToDid)
            .send({ from: userAccount })
            .on('receipt', (receipt: any) => {
                // TODO: print a success message
            })
            .on('error', console.error);
        event.preventDefault();
    }

    public render() {
        const { grantAccessToDid } = this.state;
        return (
            <GrantAccessContent>
                <form onSubmit={this.submitGrantAccess}>
                    <div className="field">
                        <label className="label">Grant Access to</label>
                        <div className="control">
                            <input
                                className="input"
                                placeholder="did"
                                type="text"
                                value={grantAccessToDid}
                                onChange={this.handleGrantAccessChange}
                            />
                        </div>
                    </div>
                    <div className="control">
                        <input className="button is-primary" type="submit" />
                    </div>
                </form>
                <h1 className="title">Access Granted</h1>
                <ul>
                    <li>Not available yet!</li>
                </ul>
            </GrantAccessContent>
        );
    }
}

export default GrantAccess;
