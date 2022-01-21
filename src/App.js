import React, {Component} from 'react';
import Customer from './componets/Customer';
import logo from './logo.svg';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/material/styles';



const customers = [
  {
    'id' : 1,
    'image' : 'http://placeimg.com/64/64/1',
    'name' : '가길동',
    'age' : '20'
  },
  {
    'id' : 2,
    'image' : 'http://placeimg.com/64/64/2',
    'name' : '나길동',
    'age' : '50'
  },
  {
    'id' : 3,
    'image' : 'http://placeimg.com/64/64/3',
    'name' : '다길동',
    'age' : '30'
  }
]

class App extends Component{
    render(){
      return (
        <Paper >
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>나이</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(c=>{ return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} age={c.age}/>)})}
            </TableBody>
          </Table>
        </Paper>
      );
  }
}

export default App;
