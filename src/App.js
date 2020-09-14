import React from 'react';
import './App.css';

//Componentes
import NavBar from './components/NavBar.js'
import AutoGrid from './components/Grid.js'
import Footer from "./components/Footer"
import Slider from './components/Slider'
import Desplegable from './components/Desplegable'

function App() {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        {//<Desplegable />
        }
        <AutoGrid/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal">
        <p>Test</p>
        <Slider />
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=fC7oUOUEEi4&ab_channel=StackMan"
          target="_blank"
          rel="noopener noreferrer">Open for a surprise</a>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
