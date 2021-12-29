module.exports = {
    siteMetadata: {
        title: `Gatsby Prismic Starter Template`,
        description: `Website description...`,
        titleTemplate: `%s | WebApp Starter`,
        url: `https://omatombola.halian.fi`,
        twitterUsername: `@sormmi`,
        image: `/mainImg.png`,
        keywords: ``,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'sormmi-first-demo',
                linkResolver: require('./src/utils/linkResolver').linkResolver,
                schemas: {
                    homepage: require('./custom_types/homepage.json'),
                    contactpage: require('./custom_types/contactpage.json'),
                    post: {},
                    article: {},
                    navigation: {},
                    aboutpage: {},
                    footer: {},
                    post: {},
                    page: {},
                    contact_page: {},
                },
                /*
                pages: [
                  {
                    type: "Homepage",
                    match: "/:lang/home",
                    path: "/",
                    component: require.resolve("./src/templates/homepage.js"),
                    langs: ["fi"],
                  },
                  {
                    type: "Contactpage",
                    match: "/:lang/contact-us",
                    path: "/",
                    component: require.resolve("./src/templates/contactpage.js"),
                    langs: ["fi"],
                  }
                ]*/
            }
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                    quality: 50,
                    breakpoints: [750, 1080, 1366, 1920],
                    backgroundColor: `transparent`,
                    tracedSVGOptions: {},
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
