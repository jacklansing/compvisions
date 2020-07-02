import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      A page at this address could not be found. Please try navigating to a
      different page or <Link to="/">Click Here</Link> to go back to the home
      page.
    </p>
  </Layout>
);

export default NotFoundPage;
