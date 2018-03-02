/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }, pluginOptions) => {
    setHeadComponents([
        <link key="firasans-preload" rel="preload" href="https://fonts.googleapis.com/css?family=Fira+Sans:400,700,900" as="style" onLoad="this.rel='stylesheet'" />,
        <noscript key="firasans"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fira+Sans:400,700,900" /></noscript>,
        <link key="spectral-preload" rel="preload" href="https://fonts.googleapis.com/css?family=Spectral:400,400i,700,700i" as="style" onLoad="this.rel='stylesheet'" />,
        <noscript key="spectral"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Spectral:400,400i,700,700i" /></noscript>
    ]);
    setPostBodyComponents([
        <script key="polyfill-io" src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver&gated"></script>
    ]);
};