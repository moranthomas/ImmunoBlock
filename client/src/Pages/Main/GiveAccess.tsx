import React, { Component } from 'react';
import styled from 'styled-components';


const GiveAccessContent = styled.div`
    margin: 4% 20%;
`;
interface IGiveAccessProps {
    uport: any;
    web3: any;
    registryQuizContract: any;
    userAccount: string;
}
interface IGiveAccessStatus {
    grantAccessToDid: string;
}
class GiveAccess extends Component<IGiveAccessProps, IGiveAccessStatus> {

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
        const { registryQuizContract, userAccount } = this.props;
        const fakeDid = 'did:ethr:0x31486054a6ad2c0b685cd89ce0ba018e210d504b';
        registryQuizContract.methods.givePermissions(fakeDid, grantAccessToDid)
            .send({ from: userAccount })
            .on('receipt', (receipt: any) => {
                // print a success message
                console.log('success', receipt);
            })
            .on('error', console.error);
        event.preventDefault();
    }

    public render() {
        const { grantAccessToDid } = this.state;
        return (
            <GiveAccessContent>
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
                <h1 className="title">Given Accesses</h1>
                <ul>
                    <li>Some</li>
                </ul>
            </GiveAccessContent>
        );
    }
}

export default GiveAccess;
