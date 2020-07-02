import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ClassTable from '../components/class-table';
import ResponsiveHeading from '../components/utils/responsive-heading';

import { Paper, Typography, Divider } from '@material-ui/core';

const ClassesPage = ({ location }) => {
  return (
    <Layout showSearch={false}>
      <ResponsiveHeading>Classes</ResponsiveHeading>
      <SEO title="classes" />
      <Divider />
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
