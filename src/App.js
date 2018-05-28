import React, { Component } from 'react';
import logo from './qantas-logo.png';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="Qantas" />
        </header>
      </div>
    );
  }
}

export default App;
