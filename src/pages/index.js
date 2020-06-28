import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Test from '../data/pages/index/index2.mdx';
import Paper from '@material-ui/core/Paper';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      <Paper elevation={3} style={{ padding: '1rem' }}>
        <Test />
      </Paper>
    </Layout>
  );
};

export default IndexPage;
