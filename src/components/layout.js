// Layout component that queries for data
// with Gatsby's useStaticQuery component

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './header';
import Footer from './footer';
import PreHeader from './pre-header';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '80vw',
    [theme.breakpoints.down('md')]: {
      width: '96vw',
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
  const theme = useTheme();
  const showPreHeader = useMediaQuery(theme.breakpoints.up('md'));
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
        {showPreHeader && <PreHeader />}
        <Header
          siteTitle={data.site.siteMetadata.title}
          showSearch={showSearch}
        />
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
