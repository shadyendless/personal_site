import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
import Link from 'gatsby-link';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navExpanded: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState((prevState, props) => ({
            navExpanded: !prevState.navExpanded
        }));
    }

    render() {
        return (
            <BodyClassName className={this.state.navExpanded ? 'noscroll' : ''}>
                <nav className="nav">
                    <div className="is-flex justify-content-space-between align-items-center">
                        <div className="logo">
                            <Link to="/">jacob foster</Link>
                        </div>
                        <ul className="nav-items hide-on-medium">
                            <li className="nav-item">
                                <Link to="/about">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog">blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/work">work</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume">resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">contact</Link>
                            </li>
                        </ul>
                        <div className={`hamburger ${this.state.navExpanded ? 'open' : ''}`} id="mobile-toggle" onClick={this.toggleMenu}>
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>
                    <ul className={`nav-items__mobile ${this.state.navExpanded ? '' : 'is-none'}`}>
                        <li className="nav-item__mobile">
                            <a href="about">about</a>
                        </li>
                        <li className="nav-item__mobile">
                            <a href="#">blog</a>
                        </li>
                        <li className="nav-item__mobile">
                            <a href="#">work</a>
                        </li>
                        <li className="nav-item__mobile">
                            <a href="#">resume</a>
                        </li>
                        <li className="nav-item__mobile">
                            <a href="#">contact</a>
                        </li>
                    </ul>
                </nav>
            </BodyClassName>
        );
    }
}

export default Navigation;
