import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Features from '../components/home/Features';
import SEO from '../components/seo';
import Hero from '../components/home/Hero';
import DarkBlock from '../components/home/DarkBlock';

const IndexPage = () => (
  <Layout>
    <SEO title="npm cli" />
    <Hero/>
    <Features/>
    <DarkBlock/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage;
