import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import DirectionsMap from '../components/directions-map';
import HeadingText from '../data/pages/directions/heading-text.mdx';
import DirectionsPageContent from '../data/pages/directions/directions.mdx';

import { makeStyles, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.up('md')]: {
      minHeight: '350px',
    },
  },
  mapGridItem: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: '1.25rem',
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
        <Grid item sm={6} className={classes.mapGridItem}>
          <DirectionsMap />
        </Grid>
        <Grid item sm={6} style={{ width: '100%' }}>
          <Typography component="div">
            <HeadingText />
          </Typography>
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
