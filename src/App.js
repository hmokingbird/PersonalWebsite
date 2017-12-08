import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Header">
        <header className="header">
        <div className="initialLogo">
        <h1>load(HM)</h1>
        </div>
        <div className="col-lg-6 col-lg-offset-3">
          <img src={logo} className="App-logo " alt="logo" />
          <h1 className = "name">Hans Mok</h1>
          <h2 className="title">With(time -> code)<br/>Student. Programmer. Video game nut. Sometime athlete. </h2>
          </div>
        </header>
        <div class = "col-lg-4 col-lg-offset-4">
        <p className="intro">
          Hi! I'm Hans. I'm an aspiring software engineer, currently pursuing a degree in Software Engineering with a passion for sports in my free time.<br/>
          I enjoy logical problems, so my interest lean towards the backend.
        </p>
        </div>
      </div>
    );
  }
}

export default App;
