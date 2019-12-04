import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestPileTechno from './components/test/TestPileTechnoComponent';
import Jeu from './components/jeu/Jeu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TestPileTechno/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    /*<Jeu></Jeu>*/
  );
}

export default App;
