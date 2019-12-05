import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestPileTechno from './components/test/TestPileTechnoComponent';
import Jeu from './components/jeu/Jeu';
import Configuration from './components/configuration/ConfigurationContainer';
import Animateur from './components/animateur/Animateur';

function App() {
  return (
    <div className="App">
      <header>
        {/*
      <TestPileTechno/>
        */}
      </header>
      <Jeu></Jeu>
      <Animateur></Animateur>
      <Configuration></Configuration>
    </div>
  );
}

export default App;
