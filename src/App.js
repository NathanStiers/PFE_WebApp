import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestPileTechno from './components/test/TestPileTechnoComponent';
import Jeu from './components/jeu/Jeu';
import Configuration from './components/configuration/ConfigurationContainer';
import Animateur from './components/animateur/Animateur';
import LoginContainer from './components/login/LoginContainer';
import Livret from './components/livret/Livret';

function App() {
  return (
    <div className="App">
      <header>
        {/*
      <TestPileTechno/>
        */}
      </header>
      <LoginContainer></LoginContainer>
      <Jeu></Jeu>
      <Animateur></Animateur>
      <Configuration></Configuration>
      <Livret></Livret>
    </div>
  );
}

export default App;
