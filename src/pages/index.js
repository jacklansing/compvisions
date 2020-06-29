import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeCarousel from '../components/home-carousel';
import Index from '../data/pages/index/index.mdx';
import Testimonials from '../components/testimonials';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <HomeCarousel />
      <Testimonials />
      <Paper elevation={3} className={classes.root}>
        <Index />
      </Paper>
    </Layout>
  );
};

export default IndexPage;
