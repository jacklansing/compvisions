import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import DirectionsMap from '../components/directions-map';
import HeadingText from '../data/pages/directions/heading-text.mdx';
import DirectionsPageContent from '../data/pages/directions/directions.mdx';

import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.up('md')]: {
      minHeight: '350px',
    },
  },
  mainContent: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    fontSize: '1rem',
    '& span.gatsby-resp-image-wrapper': {
      // Make sure any Markdown images added aren't centered
      // since it's more likely we want them left aligned
      marginLeft: '1rem !important',
    },
  },
}));

const Directions = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Directions" />
      <Grid container spacing={3} className={classes.grid}>
        <Grid item sm={6} style={{ width: '100%', marginTop: '1.25rem' }}>
          <Typography component="div">
            <HeadingText />
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <DirectionsMap />
        </Grid>
      </Grid>
      <Paper elevation={3} className={classes.mainContent}>
        <Typography component="div">
          <DirectionsPageContent />
        </Typography>
      </Paper>
    </Layout>
  );
};

export default Directions;
