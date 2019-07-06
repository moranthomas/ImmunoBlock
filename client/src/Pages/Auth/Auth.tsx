import React, { Component } from 'react';

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
            <p>Hello</p>
        );
    }
}

export default Auth;
