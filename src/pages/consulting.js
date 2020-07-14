import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeadingText from '../data/pages/consulting/heading-text.mdx';
import ConsultingPageContent from '../data/pages/consulting/consulting.mdx';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    fontSize: '1rem',
    '& span.gatsby-resp-image-wrapper': {
      marginLeft: '1rem !important',
    },
  },
}));

const useConsultImage = () =>
  useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "consulting/consult.jpg" }) {
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

const Consulting = () => {
  const imageData = useConsultImage();
  const classes = useStyles();
  const theme = useTheme();
  const clipImage = !useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Layout>
      <SEO title="Consulting" />
      <Grid container spacing={3}>
        <Grid item sm={6} style={{ width: '100%' }}>
          {clipImage ? (
            <Img
              fluid={imageData.file.childImageSharp.fluid}
              alt="Consulting page banner"
              style={{ maxHeight: '125px', boxShadow: theme.shadows[2] }}
            />
          ) : (
            <Img
              fluid={imageData.file.childImageSharp.fluid}
              alt="Consulting page banner"
              style={{ boxShadow: theme.shadows[5] }}
            />
          )}
        </Grid>
        <Grid item sm={6}>
          <Typography component="div">
            <HeadingText />
          </Typography>
        </Grid>
      </Grid>
      <Paper eleveation={3} className={classes.mainContent}>
        <Typography component="div">
          <ConsultingPageContent />
        </Typography>
      </Paper>
    </Layout>
  );
};

export default Consulting;
