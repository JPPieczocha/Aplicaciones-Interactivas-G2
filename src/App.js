import React from 'react';
import './App.css';

//Componentes
import NavBar from './components/NavBar.js'
import AutoGrid from './components/Grid.js'
import Footer from "./components/Footer"
import Slider from './components/Slider'

function App() {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        <AutoGrid/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal">
        <hr/>
        <Slider/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
