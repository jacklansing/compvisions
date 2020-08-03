import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { Link } from 'gatsby';

import { Typography } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '77ch',
        minHeight: '40vh',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        style={{ textAlign: 'center', marginBottom: '1rem' }}
      >
        <ErrorOutlineIcon
          style={{ fontSize: '8rem', textAlign: 'center', color: '#627ab8' }}
        />{' '}
        <br />
        Not Found
      </Typography>
      <Typography component="p" variant="h5" style={{ textAlign: 'center' }}>
        A page at this address could not be found. Please try navigating to a
        different page or <Link to="/">Click Here</Link> to go back to the home
        page.
      </Typography>
    </div>
  </Layout>
);

export default NotFoundPage;
