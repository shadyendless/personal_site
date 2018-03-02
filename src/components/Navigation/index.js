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
    state = {
        navExpanded: false
    };

    toggleMenu = () => {
        this.setState((prevState, props) => ({
            navExpanded: !prevState.navExpanded
        }));
    };

    render() {
        const navExpanded = this.state.navExpanded;
        return (
            <BodyClassName className={navExpanded ? 'noscroll' : ''}>
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
                        {this.renderHamburger()}
                    </div>
                    {this.renderMobileNav()}
                </nav>
            </BodyClassName>
        );
    }

    renderHamburger() {
        const navExpanded = this.state.navExpanded;
        return (
            <button id="mobile-toggle" className={`hamburger ${navExpanded ? 'open' : ''}`} onClick={this.toggleMenu}>
                <span className="input-fix" tabIndex="-1">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
        );
    }

    renderMobileNav() {
        const navExpanded = this.state.navExpanded;
        return (
            <ul className={`nav-items__mobile ${navExpanded ? '' : 'is-none'}`}>
                {links.map(({ url, link }) => (
                    <li key={`${link}-mobile`} className="nav-item__mobile">
                        <Link to={url} activeClassName="active" onClick={this.toggleMenu}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Navigation;
