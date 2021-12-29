// support for absolute imports

const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryData = await graphql(`
    {
      allPrismicContactpage {
        nodes {
          id
          lang
          url
        }
      }
    
      allPrismicHomepage {
        nodes {
          id
          url
          lang
        }
      }
    }
  `)

  queryData.data.allPrismicHomepage.nodes.forEach((page) => {
    createPage({
      path: '/',
      component: path.resolve(__dirname, 'src/templates/homepage.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicContactpage.nodes.forEach((page) => {
    createPage({
      path: '/contact',
      component: path.resolve(__dirname, 'src/templates/contactpage.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  /*
  queryData.data.allPrismicPage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/page.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })*/
}