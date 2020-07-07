import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeCarousel from '../components/home-carousel';
import PartnerLogos from '../components/partner-logos';
import Testimonials from '../components/testimonials';

import Index from '../data/pages/index/index.mdx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  gradient: {
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      '&:before': {
        background: 'linear-gradient(315deg, #6177b7, white)',
        content: '""',
        height: '100%',
        left: '-25%',
        position: 'absolute',
        top: '-3%',
        transform: 'rotate(-5deg)',
        transformOrigin: 'left top',
        width: '170%',
        zIndex: '-1',
      },
    },
    [theme.breakpoints.up('xl')]: {
      '&:before': {
        height: '100%',
        top: '0%',
      },
    },
  },
}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <HomeCarousel />
      <Testimonials />
      <div className={classes.gradient}>
        <Index />
      </div>
      <PartnerLogos />
    </Layout>
  );
};

export default IndexPage;
