import zenscroll from 'zenscroll';
import React, { Component } from 'react';
import Observer from 'react-intersection-observer';
import { isLandscape, isPortrait } from '../../utils';

import me from '../../images/me.jpg';
import me2x from '../../images/me@2x.jpg';
import me3x from '../../images/me@3x.jpg';

class AboutLeft extends Component {
    state = {
        fixedTOC: false
    };

    scrollTo = (event) => {
        event.preventDefault();
        const slug = event.target.dataset.scrollTo;
        const headerId = event.target.dataset.headerId;

        zenscroll.center(document.getElementById(slug), 999, isLandscape() ? 50 : 250);
        this.props.setActiveHeaderId(+headerId);
    };

    handleTocObserver = (inView) => {
        if (isLandscape() || isPortrait()) return;

        this.setState(() => ({
            fixedTOC: !inView
        }));
    };

    render() {
        const activeHeaderId = this.props.activeHeaderId;
        const edges = this.props.data.allMarkdownRemark.edges;
        const fixedTOC = this.state.fixedTOC;

        return (
            <div className="page-left">
                <Observer onChange={this.handleTocObserver}>
                    <img className="author-image" src={me} srcSet={`${me2x} 2x, ${me3x} 3x`} />
                </Observer>
                <div className={`toc ${fixedTOC ? 'fixed' : ''}`}>
                    <h1 className="toc__header" />
                    <div className="toc__links">
                        {edges.map(edge => (
                            <a
                                key={`${edge.node.frontmatter.slug}-toc`}
                                className={`toc__link ${edge.node.frontmatter.id === activeHeaderId ? 'active' : ''}`}
                                href=""
                                data-scroll-to={edge.node.frontmatter.slug}
                                data-header-id={edge.node.frontmatter.id}
                                onClick={this.scrollTo}
                            >
                                {edge.node.frontmatter.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutLeft;
