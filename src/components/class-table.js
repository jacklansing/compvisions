import React from 'react';
import useClassData from '../hooks/use-class-data';
import MaterialTable from 'material-table';
import tableIcons from '../utils/table-icons';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
  },
  registerButton: {
    marginBottom: '1.25rem',
  },
  rowDetailsContainer: {
    padding: '1rem',
    width: '100%',
  },
  rowDetails: {
    [theme.breakpoints.down('lg')]: {
      padding: '1rem',
      maxWidth: '96vw',
    },
  },
}));

const ClassTable = ({ redirectSearch }) => {
  const classes = useStyles();

  // Pull data from each each node, and place into tableData array
  const tableData = [];
  useClassData().forEach((node) => tableData.push(node.class));

  // Column and data definition for material-table
  const columns = [
    {
      title: 'Topic',
      field: 'topic',
      cellStyle: { width: 300, minWidth: 300 },
    },
    { title: 'Dates', field: 'dates' },
    { title: 'Length', field: 'length' },
    { title: 'Cost', field: 'cost' },
    {
      title: 'Outline',
      field: 'outline',
      render: (rowData) => (
        <a href={rowData.outline} target="_blank" rel="noreferrer">
          View Class Outline
        </a>
      ),
    },
    { title: 'Category', field: 'category' },
  ];
  const data = [...tableData];

  return (
    <div className={classes.root}>
      <Button
        component="a"
        color="primary"
        variant="contained"
        href="mailto:vision@compvisions.com"
        className={classes.registerButton}
      >
        Register Now
      </Button>
      <MaterialTable
        title="Class Schedule"
        columns={columns}
        data={data}
        icons={tableIcons}
        detailPanel={(rowData) => (
          <div className={classes.rowDetailsContainer}>
            <div className={classes.rowDetails}>{rowData.hover_desc}</div>
          </div>
        )}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
        options={{
          searchText: redirectSearch.length ? redirectSearch : '',
        }}
      />
    </div>
  );
};

export default ClassTable;
