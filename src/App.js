import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './componets/Customer';

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
        <div>
          {customers.map(c=>{ return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} age={c.age}/>)})}
        </div>
      );
  }
}

export default App;
