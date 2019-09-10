const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({node, getNode, basePath: 'content'});
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  //returning graphql query that is a promise and creates a page for each 
  //node that is returned from the query
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/Page.js'),
        context: {
          slug: node.fields.slug,
        }
      });
    });
  });
};