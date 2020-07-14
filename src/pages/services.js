import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeadingText from '../data/pages/services/heading-text.mdx';
import ServicesPageContent from '../data/pages/services/services.mdx';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useServicesImage = () =>
  useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "services/services.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

const useStyles = makeStyles((theme) => ({
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

const Services = () => {
  const imageData = useServicesImage();
  const classes = useStyles();
  const theme = useTheme();
  const clipImage = !useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Layout>
      <SEO title="Services" />
      <Grid container spacing={3}>
        <Grid item sm={6} style={{ width: '100%', marginTop: '1.25rem' }}>
          {clipImage ? (
            <Img
              fluid={imageData.file.childImageSharp.fluid}
              alt="Students using computers"
              style={{ maxHeight: '125px', boxShadow: theme.shadows[2] }}
            />
          ) : (
            <Img
              fluid={imageData.file.childImageSharp.fluid}
              alt="Students using computers"
              style={{ boxShadow: theme.shadows[5] }}
            />
          )}
        </Grid>
        <Grid item sm={6} style={{ fontSize: '1rem' }}>
          <Typography component="div">
            <HeadingText />
          </Typography>
        </Grid>
      </Grid>
      <Paper elevation={3} className={classes.mainContent}>
        <Typography component="div">
          <ServicesPageContent />
        </Typography>
      </Paper>
    </Layout>
  );
};

export default Services;
