import React, { Component } from 'react';
import Observer from 'react-intersection-observer';
import { isLandscape, isPortrait } from '../../utils';

import me from '../../images/me.jpg';
import me2x from '../../images/me@2x.jpg';
import me3x from '../../images/me@3x.jpg';

class AboutLeft extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fixedTOC: false
        };

        this.handleTocObserver = this.handleTocObserver.bind(this);
    }

    handleTocObserver(inView) {
        if (isLandscape() || isPortrait()) return;

        this.setState(() => ({
            fixedTOC: !inView
        }));
    }

    render() {
        const edges = this.props.data.allMarkdownRemark.edges;
        const fixedTOC = this.state.fixedTOC;

        return (
            <div className="about-left">
                <Observer onChange={this.handleTocObserver}>
                    <img className="about-image" src={me} srcSet={`${me2x} 2x, ${me3x} 3x`} />
                </Observer>
                <div className={`about-left__toc ${fixedTOC ? 'fixed' : ''}`}>
                    <h1 className="about-left__header" />
                    <div className="about-left__links">
                        {edges.map(edge => (
                            <a
                                key={`${edge.node.frontmatter.id}-toc`}
                                className={`about-left__link ${edge.node.frontmatter.order === 1 ? 'active' : ''}`}
                                href=""
                                data-scroll-to={edge.node.frontmatter.id}
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
