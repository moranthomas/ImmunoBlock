import React, { Component } from 'react';
import { UPortButton } from 'rimble-ui';


interface IWelcomeProps {
    uport: any;
    registryQuizContract: any;
    userAccount: string;
}
interface IWelcomeState {
}
class Welcome extends Component<IWelcomeProps, IWelcomeState> {
    /**
     * @ignore
     */
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    public loginWithUPort = (event: any) => {
        const { uport } = this.props;
        // Request credentials to login
        const req = {
            notifications: true,
            requested: ['name', 'country'],
        };
        uport.requestDisclosure(req);
        uport.onResponse('disclosureReq').then(() => {
            uport.sendVerification({
                claim: { User: { Signed: new Date() } },
            });
        });
        event.preventDefault();
    }

    public fakeLogin = () => {
        const { registryQuizContract, userAccount } = this.props;
        const fakeDid = 'did:ethr:0x31486054a6ad2c0b685cd89ce0ba018e210d504b';
        //
        registryQuizContract.methods.signupUser(fakeDid)
            .send({ from: userAccount })
            .then((receipt: any) => {
                console.log('receipt', receipt);
            });
    }

    /**
     * @ignore
     */
    public render() {
        return (<>
            Welcome to ImmunoBlock
            <br />
            <UPortButton.Solid onClick={this.loginWithUPort}>Connect with uPort</UPortButton.Solid>
            <button onClick={this.fakeLogin}>Sign Up</button>
        </>);
    }
}

export default Welcome;
