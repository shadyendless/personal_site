import zenscroll from 'zenscroll';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TableOfContents extends Component {
    static propTypes = {
        edges: PropTypes.array.isRequired,
        isFixed: PropTypes.bool.isRequired,
        activeHeaderId: PropTypes.number.isRequired,
        setActiveHeaderId: PropTypes.func.isRequired
    };

    scrollTo = (event) => {
        event.preventDefault();
        const slug = event.target.dataset.scrollTo;
        const headerId = event.target.dataset.headerId;

        zenscroll.center(document.getElementById(slug), 999, isLandscape() ? 50 : 250);
        this.props.setActiveHeaderId(+headerId);
    };

    render() {
        const activeHeaderId = this.props.activeHeaderId;
        const edges = this.props.edges;
        const isFixed = this.props.isFixed;

        return (
            <div className={`toc ${isFixed ? 'fixed' : ''}`}>
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
        );
    }
}

export default TableOfContents;