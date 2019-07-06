import React, { Component } from 'react';
import pinkHeart from './pink_heart.png';

interface INavbarState {
    burgerMenuActive: boolean;
}
class Navbar extends Component<{}, INavbarState> {
    /**
     * @ignore
     */
    constructor(props: any) {
        super(props);
        this.state = {
            burgerMenuActive: false,
        };
    }

    public handleClickBurgerMenu = () => {
        this.setState((state) => ({
            burgerMenuActive: !state.burgerMenuActive,
        }));
    }

    /**
     * @ignore
     */
    public render() {
        const { burgerMenuActive } = this.state;
        const activeBurgerMenu = (burgerMenuActive) ? ('is-active') : ('');
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src={pinkHeart} height="28" />
                    </a>
                    <a
                        role="button"
                        className={'navbar-burger burger ' + activeBurgerMenu}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        onClick={this.handleClickBurgerMenu}
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div id="navbarBasicExample" className={'navbar-menu ' + activeBurgerMenu}>
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">Home</a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary"><strong>Sign up</strong></a>
                                <a className="button is-light">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
