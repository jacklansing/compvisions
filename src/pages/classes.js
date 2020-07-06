import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ClassTable from '../components/class-table';
import ResponsiveHeading from '../components/utils/responsive-heading';
import HeadingText from '../data/pages/classes/heading-text.mdx';

import { Typography, Divider } from '@material-ui/core';

const ClassesPage = ({ location }) => {
  return (
    <Layout showSearch={false}>
      <ResponsiveHeading>Classes</ResponsiveHeading>
      <SEO title="classes" />
      <Divider />
      <Typography component="div">
        <HeadingText />
      </Typography>
      <ClassTable
        redirectSearch={location.state ? location.state.searchText : ''}
      />
    </Layout>
  );
};

ClassesPage.defaultProps = {
  location: {
    state: {
      searchText: '',
    },
  },
};

export default ClassesPage;
