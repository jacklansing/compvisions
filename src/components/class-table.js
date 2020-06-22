import React from 'react';
import useCSVData from '../hooks/use-csv-data';
import MaterialTable from 'material-table';
import tableIcons from '../utils/table-icons';

const ClassTable = (props) => {
  const tableData = [];
  useCSVData().forEach((node) => tableData.push(node.class));
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
    <div>
      <MaterialTable
        title="Classes"
        columns={columns}
        data={data}
        icons={tableIcons}
        detailPanel={(rowData) => (
          <div style={{ padding: `1rem` }}>{rowData.hover_desc}</div>
        )}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
      />
    </div>
  );
};

export default ClassTable;
