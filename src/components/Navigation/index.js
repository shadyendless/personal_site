import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
import Link from 'gatsby-link';

const links = [
    { url: '/about', link: 'about' },
    { url: '/blog', link: 'blog' },
    { url: '/work', link: 'work' },
    { url: '/resume', link: 'resume' },
    { url: '/contact', link: 'contact' }
];

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
                            {links.map(({ url, link }) => (
                                <li key={link} className="nav-item">
                                    <Link to={url} activeClassName="active">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div id="mobile-toggle" className={`hamburger ${this.state.navExpanded ? 'open' : ''}`} onClick={this.toggleMenu}>
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>
                    <ul className={`nav-items__mobile ${this.state.navExpanded ? '' : 'is-none'}`}>
                        {links.map(({ url, link }) => (
                            <li key={`${link}-mobile`} className="nav-item__mobile">
                                <Link to={url} activeClassName="active" onClick={this.toggleMenu}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </BodyClassName>
        );
    }
}

export default Navigation;
