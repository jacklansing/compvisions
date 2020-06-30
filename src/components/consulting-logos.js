import React from 'react';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';

const useConsultingLogos = () =>
  useStaticQuery(graphql`
    query {
      logos: allFile(
        filter: { absolutePath: { regex: "/consulting-logos/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 100) {
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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  gridList: {
    width: '100%',
  },
}));

const ConsultingLogos = (props) => {
  const classes = useStyles();
  const data = useConsultingLogos();
  const logos = data.logos.edges;
  return (
    <div className={classes.root}>
      {logos.map((logo, i) => (
        <Img
          key={i}
          fluid={logo.node.childImageSharp.fluid}
          style={{ minWidth: 100 }}
          alt="consulting company logo"
        />
      ))}
    </div>
  );
};

export default ConsultingLogos;
