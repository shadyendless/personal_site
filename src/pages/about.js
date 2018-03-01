import AboutLeft from '../components/AboutLeft';
import React, { Component, Fragment } from 'react';
import Observer from 'react-intersection-observer';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        console.log(props.data);

        this.state = {
            activeHeaderId: 1
        };

        this.setActiveHeaderId = this.setActiveHeaderId.bind(this);
        this.handleHeaderObserver = this.handleHeaderObserver.bind(this);
    }

    setActiveHeaderId(headerId) {
        this.setState(() => ({
            activeHeaderId: headerId
        }));
    }

    handleHeaderObserver(headerId, inView) {
        if (inView) this.setActiveHeaderId(headerId);
    }

    render() {
        const data = this.props.data;
        const activeHeaderId = this.state.activeHeaderId;
        const edges = this.props.data.allMarkdownRemark.edges;

        return (
            <div className="aboutpage">
                <AboutLeft data={data} activeHeaderId={activeHeaderId} setActiveHeaderId={this.setActiveHeaderId} />
                {edges.map(edge => (
                    <Fragment key={edge.node.frontmatter.slug}>
                        <Observer
                            className="about-header"
                            rootMargin="0% 0% -60% 0%"
                            onChange={inView => this.handleHeaderObserver(edge.node.frontmatter.id, inView)}
                        >
                            <h1 id={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</h1>
                        </Observer>
                        <div className="about-text" dangerouslySetInnerHTML={{ __html: edge.node.html }} />
                    </Fragment>
                ))}
            </div>
        );
    }
}

export const query = graphql`
    query AboutQuery {
        allMarkdownRemark(filter: { frontmatter: { section: { eq: "About" } } }, sort: { fields: [frontmatter___id], order: ASC }) {
            edges {
                node {
                    frontmatter {
                        id
                        slug
                        title
                    }
                    html
                }
            }
        }
    }
`;

export default AboutPage;
