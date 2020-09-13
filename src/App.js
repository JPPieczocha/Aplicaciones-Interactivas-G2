import React from 'react';
import logo from './logo.svg';
import './App.css';
import Botones from './components/Botones.js'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Botones>
      </Botones>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola wacho
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get stick bug'd lol
        </a>
      </header>
    </div>
  );
}

export default App;
