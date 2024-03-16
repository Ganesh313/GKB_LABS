import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
export default function TableData() {
    const [data,setData]=React.useState([])
    React.useEffect(()=>{
    axios.get('http://localhost:1234/gkb/getall').then(
      (result)=>{
        setData(result.data)
      }
    )
})
  return (<TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>ID</TableCell>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">Email Id</TableCell>
            <TableCell align="center">Date Of Birth</TableCell>
            <TableCell align="center">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="center">{row.id}</TableCell>
              <TableCell align='center'>{row.name} </TableCell>
              <TableCell align='center'>{row.email} </TableCell>
              <TableCell align='center'>{row.dob} </TableCell>
              <TableCell align='center'>{row.age} </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
