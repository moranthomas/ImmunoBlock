import React, { Component } from 'react';

interface NavbarState {
}
class Navbar extends Component<{}, NavbarState> {
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

export default Navbar;
