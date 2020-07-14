import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeadingText from '../data/pages/remote-learning/heading-text.mdx';
import RemoteLearningPageContent from '../data/pages/remote-learning/remote-learning.mdx';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useRemoteLearningImage = () =>
  useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "remote-learning/remote_learning.jpg" }) {
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

const RemoteLearning = () => {
  const imageData = useRemoteLearningImage();
  const classes = useStyles();
  const theme = useTheme();
  const clipImage = !useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Layout>
      <SEO title="RemoteLearning" />
      <Grid container spacing={3}>
        <Grid item sm={4} style={{ width: '100%' }}>
          {clipImage ? (
            <Img
              fluid={imageData.file.childImageSharp.fluid}
              alt="Remote learning page banner"
              style={{ maxHeight: '125px', boxShadow: theme.shadows[2] }}
            />
          ) : (
            <Img
              fluid={imageData.file.childImageSharp.fluid}
              alt="Remote learning page banner"
              style={{ boxShadow: theme.shadows[5] }}
            />
          )}
        </Grid>
        <Grid item sm={8}>
          <Typography component="div">
            <HeadingText />
          </Typography>
        </Grid>
      </Grid>
      <Paper elevation={3} className={classes.mainContent}>
        <Typography component="div">
          <RemoteLearningPageContent />
        </Typography>
      </Paper>
    </Layout>
  );
};

export default RemoteLearning;
