import React from 'react';
import logo from './qantas-logo.png';
import './App.css';
import Search from '../containers/Search';

const App = () => (
  <div className="App">
    <header>
      <img src={logo} className="App-logo" alt="Qantas" />
    </header>
    <Search />
  </div>
);

export default App;
