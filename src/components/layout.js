// Layout component that queries for data
// with Gatsby's useStaticQuery component

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import PreHeader from './pre-header';

import { CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '80vw',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100vw - 24px)',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  '@global': {
    html: {
      overflowX: 'hidden',
    },
    a: {
      color: theme.palette.primary.dark,
    },
    h2: {
      // For mdx files using h2
      [theme.breakpoints.down('md')]: {
        ...theme.typography.h6,
      },
    },
  },
}));

const Layout = ({ children, showSearch = true }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <CssBaseline>
        <Header
          siteTitle={data.site.siteMetadata.title}
          showSearch={showSearch}
        />
        <PreHeader />
        <div className={classes.mainContainer}>
          <main>{children}</main>
        </div>
        <Footer />
      </CssBaseline>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
