import React from 'react';
import './../../App.css';

//Componentes
import NavBar from './../NavBar.js'
import AutoGrid from './../Grid.js'
import Footer from "./../Footer"
import Slider from './../Slider'

export default function MenuPrincipal() {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        <AutoGrid/>
      </header>
      <div className="App-header">
        <NavBar align="center"/>
      </div>
      <div className="App-principal">
        <p>Test</p>
        <Slider />
      </div>
      <Footer/>
    </div>
  );
}