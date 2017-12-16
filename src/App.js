import React, { Component } from 'react';
import './App.css';
import About from './About.js';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
