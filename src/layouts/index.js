import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import BodyClassName from 'react-body-classname';

import Navigation from '../components/Navigation';
import '../sass/main.scss';

const TemplateWrapper = ({ children }) => (
    <BodyClassName className="frontpage">
        <Fragment>
            <div className="top-color-bar" />
            <div className="container site-wrapper is-flex flex-column">
                <Helmet
                    title="Jacob Foster"
                    meta={[
                        { name: 'description', content: 'Hello! I am a designer and developer located in the Pacific Northwest.' },
                        { name: 'keywords', content: 'designer, developer, fullstack, oregon, pacific northwest, jacob foster' },
                        { charset: 'utf-8' },
                        { 'http-equiv': 'X-UA=Compatible', content: 'IE=edge' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
                    ]}
                />
                <Navigation />
                {children()}
            </div>
        </Fragment>
    </BodyClassName>
);
TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
