import zenscroll from 'zenscroll';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { isLandscape } from '../../utils'

class TableOfContents extends Component {
    static propTypes = {
        edges: PropTypes.array.isRequired,
        isFixed: PropTypes.bool.isRequired,
        activeHeaderId: PropTypes.number.isRequired,
        setActiveHeaderId: PropTypes.func.isRequired
    };

    state = {
        tocShown: false
    };

    scrollTo = (event) => {
        event.preventDefault();
        const slug = event.target.dataset.scrollTo;
        const headerId = event.target.dataset.headerId;

        zenscroll.center(document.getElementById(slug), 999, isLandscape() ? 50 : 250);
        this.props.setActiveHeaderId(+headerId);
        this.toggleTOC();
    };

    toggleTOC = () => {
        this.setState((prevState, props) => ({
            tocShown: !prevState.tocShown
        }));
    };

    render() {
        const { activeHeaderId, edges, isFixed } = this.props;
        const { tocShown } = this.state;

        return (
            <div className={`toc ${isFixed ? 'fixed' : ''}`}>
                <h1 className="toc__header">
                    <button class="toc-toggler" onClick={() => this.toggleTOC()}>
                        <span className="input-fix" tabIndex="-1">
                            {tocShown ? 'Hide' : 'Show'}
                        </span>
                    </button>
                </h1>
                <div className={`toc__links ${tocShown ? 'expanded' : ''}`}>
                    {edges.map(edge => (
                        <a
                            key={`${edge.node.frontmatter.slug}-toc`}
                            className={`toc__link ${edge.node.frontmatter.id === activeHeaderId ? 'active' : ''}`}
                            href=""
                            data-scroll-to={edge.node.frontmatter.slug}
                            data-header-id={edge.node.frontmatter.id}
                            onClick={this.scrollTo}>
                            {edge.node.frontmatter.title}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default TableOfContents;