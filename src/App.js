import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Courcesales';

class App extends Component {
  render() {
    var courses = [
      { name: 'Complete ioS10 dev course', price: 100 },
      { name: 'Complete ioS10 dev course', price: 200 },
      { name: 'Complete ioS10 dev course', price: 300 },
      { name: 'Complete ioS10 dev course', price: 400 },
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h2>Welcome to Coursepurchase Page</h2>
        </header>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
