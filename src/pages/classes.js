import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ClassTable from '../components/class-table';

const ClassesPage = ({ location }) => {
  return (
    <Layout showSearch={false}>
      <SEO title="classes" />
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
