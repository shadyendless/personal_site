import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TableOfContents from '../TableOfContents';
import Observer from 'react-intersection-observer';
import { isLandscape, isPortrait } from '../../utils';

class LeftSection extends Component {
    static propTypes = {
        data: PropTypes.shape({
            allMarkdownRemark: PropTypes.shape({
                edges: PropTypes.array
            })
        }).isRequired,
        activeHeaderId: PropTypes.number.isRequired,
        setActiveHeaderId: PropTypes.func.isRequired
    };

    state = {
        fixedTOC: false
    };

    handleTocObserver = (inView) => {
        if (isLandscape() || isPortrait()) return;

        this.setState(() => ({
            fixedTOC: !inView
        }));
    };

    render() {
        const { data, activeHeaderId, setActiveHeaderId, aboveTOC, children } = this.props;

        return (
            <div className="page-left">
                <Observer onChange={this.handleTocObserver}>
                    {children}
                </Observer>
                <TableOfContents edges={data.allMarkdownRemark.edges}
                    isFixed={this.state.fixedTOC}
                    activeHeaderId={activeHeaderId}
                    setActiveHeaderId={setActiveHeaderId} />
            </div>
        );
    }
};

export default LeftSection;
