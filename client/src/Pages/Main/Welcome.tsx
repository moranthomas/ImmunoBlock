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
        uport.onResponse('disclosureReq').then(async (disclosureReq: any) => {
            //
            uport.sendVerification({
                claim: { User: { Signed: new Date() } },
            });
            //
            await (window as any).ethereum.enable();
            await registryQuizContract.methods.signupUser(disclosureReq.payload.did)
                .send({ from: userAccount });
            cookies.set('did', disclosureReq.payload.did, { path: '/' });
            window.location.reload();
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
