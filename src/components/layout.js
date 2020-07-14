// Layout component that queries for data
// with Gatsby's useStaticQuery component

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './header';
import Footer from './footer';
import PreHeader from './pre-header';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '80vw',
    [theme.breakpoints.down('md')]: {
      width: 'fit-content',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  '@global': {
    html: {
      overflowX: 'hidden',
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
          <Footer />
        </div>
      </CssBaseline>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
