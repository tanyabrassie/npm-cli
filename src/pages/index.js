import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/home/Features';
import SEO from '../components/seo';
import Hero from '../components/home/Hero';
import DarkBlock from '../components/home/DarkBlock';
import {ThemeProvider} from 'styled-components';
import {theme} from '../theme';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="npm cli" />
      <Hero/>
      <Features/>
      <DarkBlock/>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
