import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import ResponsiveHeading from '../components/utils/responsive-heading';
import { Paper, makeStyles } from '@material-ui/core';

const usePartnerLogos = () =>
  useStaticQuery(graphql`
    query {
      logos: allFile(filter: { absolutePath: { regex: "/partner-logos/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  imageBox: {
    display: 'flex',
    flexFlow: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  gridList: {
    width: '100%',
  },
  image: {
    minWidth: 225,
    [theme.breakpoints.down('sm')]: {
      minWidth: 115,
    },
    [theme.breakpoints.up('xl')]: {
      minWidth: 200,
    },
  },
}));

const PartnerLogos = (props) => {
  const classes = useStyles();
  const data = usePartnerLogos();
  const logos = data.logos.edges;
  return (
    <div className={classes.root}>
      <ResponsiveHeading
        component="h2"
        style={{
          textAlign: 'center',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
      >
        Our Partners
      </ResponsiveHeading>
      <Paper elevation={2} className={classes.imageBox}>
        {logos.map((logo, i) => (
          <Img
            key={i}
            fluid={logo.node.childImageSharp.fluid}
            className={classes.image}
            alt="partner company logo"
          />
        ))}
      </Paper>
    </div>
  );
};

export default PartnerLogos;
