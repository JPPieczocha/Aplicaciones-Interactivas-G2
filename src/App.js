import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuPrincipal from './components/MenuPrincipal.js'

function App() {

  return (
    <div className="App">
      <header className="App-barraTitulo">
       <img src={logo} className="App-logo" alt="logo"/>
        Consultorio
      </header>
      <body className="App-header">
      <MenuPrincipal>
      </MenuPrincipal>
      </body>
      <header className="App-principal">
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
