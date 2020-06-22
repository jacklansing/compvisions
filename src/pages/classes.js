import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ClassTable from '../components/class-table';

const ClassesPage = (props) => {
  return (
    <Layout>
      <SEO title="classes" />
      <ClassTable />
    </Layout>
  );
};

export default ClassesPage;
