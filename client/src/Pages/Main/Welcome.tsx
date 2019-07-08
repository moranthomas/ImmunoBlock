import React, { Component } from 'react';
import { UPortButton } from 'rimble-ui';
import Cookies from 'universal-cookie';


interface IWelcomeProps {
    uport: any;
    registryQuizContract: any;
    userAccount: string;
    cookies: Cookies;
}
class Welcome extends Component<IWelcomeProps, {}> {

    public loginWithUPort = (event: any) => {
        const { uport, registryQuizContract, userAccount, cookies } = this.props;
        // Request credentials to login
        const req = {
            notifications: true,
            requested: ['name', 'country'],
        };
        uport.requestDisclosure(req);
        uport.onResponse('disclosureReq').then((disclosureReq: any) => {
            //
            uport.sendVerification({
                claim: { User: { Signed: new Date() } },
            });
            //
            registryQuizContract.methods.signupUser(disclosureReq.payload.did)
                .send({ from: userAccount })
                .then((receipt: any) => {
                    cookies.set('did', disclosureReq.payload.did, { path: '/' });
                    // TODO: reload page
                });
        });
        event.preventDefault();
    }

    /**
     * @ignore
     */
    public render() {
        return (<>
            Welcome to ImmunoBlock
            <br />
            <UPortButton.Solid onClick={this.loginWithUPort}>Connect with uPort</UPortButton.Solid>
        </>);
    }
}

export default Welcome;
