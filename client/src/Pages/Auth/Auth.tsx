import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';

interface AuthState {
}
class Auth extends Component<{}, AuthState> {
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
    render() {
        return (
            <Navbar />
        );
    }
}

export default Auth;
