/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
    setPostBodyComponents([
        <script key="polyfill-io" src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver&gated"></script>
    ]);
};