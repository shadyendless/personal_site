module.exports = {
    pathPrefix: '/new',
    siteMetadata: {
        title: `Jacob Foster`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-react-next`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`
            }
        },
        `gatsby-transformer-remark`
    ]
};
