import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeCarousel from '../components/home-carousel';
import Index from '../data/pages/index/index.mdx';
import Paper from '@material-ui/core/Paper';
import Testimonials from '../components/testimonials';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      <HomeCarousel />
      <Testimonials />
      <Paper elevation={3} style={{ padding: '1rem' }}>
        <Index />
      </Paper>
    </Layout>
  );
};

export default IndexPage;
