import React, { Component, FunctionComponent } from 'react';

import pinkHeart from './pink_heart.png';


interface INavbarProps {
    uport: any;
}
interface INavbarState {
    burgerMenuActive: boolean;
    logoutPopUp: boolean;
}
class Navbar extends Component<INavbarProps, INavbarState> {
    /**
     * @ignore
     */
    constructor(props: any) {
        super(props);
        this.state = {
            burgerMenuActive: false,
            logoutPopUp: false,
        };
    }

    public toogleBurgerMenu = () => {
        this.setState((state) => ({
            burgerMenuActive: !state.burgerMenuActive,
        }));
    }

    public tooglePopUpLogout = (event: any) => {
        this.setState((state) => ({
            logoutPopUp: !state.logoutPopUp,
        }));
    }

    public handleLogout = (event: any) => {
        const { uport } = this.props;
        uport.logout();
    }

    /**
     * @ignore
     */
    public render() {
        const { burgerMenuActive } = this.state;
        const activeBurgerMenu = (burgerMenuActive) ? ('is-active') : ('');
        return (<>
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
                        onClick={this.toogleBurgerMenu}
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
                                {this.renderAuth()}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Modal
                handleClose={this.tooglePopUpLogout}
                handleLogout={this.handleLogout}
                show={this.state.logoutPopUp}
            />
        </>);
    }

    private renderAuth() {
        const { uport } = this.props;
        // load uport status from browser
        uport.loadState();
        const username = uport.state.name;
        // if the user is logged, say hello!
        if (username !== undefined) {
            return <div>welcome <strong onClick={this.tooglePopUpLogout}>{username}</strong></div>;
        }
    }
}

const Modal: FunctionComponent<{
    handleClose: any, handleLogout: any, show: boolean,
}> = ({ handleClose, handleLogout, show }) => {
    const showHideClassName = show ? 'modal is-active' : 'modal';

    return (
        <div className={showHideClassName}>
            <div className="modal-background" />
            <div className="modal-content">
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    Do you really want to <strong>leave</strong>?
                                        <br />
                                    <button className="button is-danger" onClick={handleLogout}>Yes</button>
                                    <button className="button is-primary">No</button>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={handleClose} />
        </div>
    );
};

export default Navbar;
