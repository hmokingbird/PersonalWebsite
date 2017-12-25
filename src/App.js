import React, { Component } from 'react';
import './App.css';
import About from './components/About.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div>
          <Header />
          <About />
        </div>
        <div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
