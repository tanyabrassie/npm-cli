import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {ThemeProvider} from 'styled-components';
import {theme} from '../theme';
import styled from 'styled-components';

const Content = styled.div`
  max-width: 640px;
  margin: auto;
  padding: 0 16px;
`;

const Page = ({data}) => {
  const pageData = data.markdownRemark;
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Content className="documentation" dangerouslySetInnerHTML={{ __html: pageData.html }} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default Page;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
    }
  }
`;