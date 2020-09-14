import React from 'react';
import logo from './logo.svg';
import './App.css';
import Botones from './components/Botones.js'

function App() {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        Consultorio
      </header>
      <body className="App-header">
      <Botones>
      </Botones>
      </body>
      <header className="App-principal">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=fC7oUOUEEi4&ab_channel=StackMan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open for a surprise
        </a>
      </header>
    </div>
  );
}

export default App;
