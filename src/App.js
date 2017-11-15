import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales.js';

class App extends Component {
  render() {
    var courses = [
      {
        name: "C# ",
        price: 200
      }, {
        name: "PHP ",
        price: 100
      }, {
        name: "Java ",
        price: 150
      }
    ];
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to Course Sales</h1>
      </header>
      <Coursesales items={courses}/>
    </div>);
  }
}

export default App;
