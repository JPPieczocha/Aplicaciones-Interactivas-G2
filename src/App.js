import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuPrincipal from './components/MenuPrincipal.js';
import Desplegable from './components/Desplegable.js';
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
      <header className="App-barraTitulo">
       <img src={logo} className="App-logo" alt="logo"/>
        Consultorio
        <Desplegable></Desplegable>
      </header>
      <body className="App-header">
      <MenuPrincipal>
      </MenuPrincipal>
      </body>
      <div className="App-principal">
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
      </div>
      <Footer/>
    </div>
  );
}

export default App;
