import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //   valueFormatter: (params) => {
    //       const valueFormatted = Number(params.value * 100).toLocaleString();
    //       return `${valueFormatted} %`
    //   }
  },
];
// const columns = [
//   {
//     field: 'date',
//     headerName: 'Year',
//     width: 150,
//     renderCell: (params) => (
//       <strong>
//         {params.value.getFullYear()}
//         <Button
//           variant="contained"
//           color="primary"
//           size="small"
//           style={{ marginLeft: 16 }}
//         >
//           Open
//         </Button>
//       </strong>
//     ),
//   },
// ];
// const columns = [
//   {
//     field: 'date',
//     width: 150,
//     type: 'date',
//     renderHeader: () => (
//       <strong>
//         {'Birthday '}
//         <span role="img" aria-label="enjoy">
//           🎂
//         </span>
//       </strong>
//     ),
//   },
// ];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const SelRows = () => {
    console.log('row=');
}
export default function DataTables() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
              rowsPerPageOptions={[5]}
            //   disableSelectionOnClick.
            components={{
    Toolbar: GridToolbar,
  }}
        // checkboxSelection
            //   action={SelRows}
      />
    </div>
  );
}