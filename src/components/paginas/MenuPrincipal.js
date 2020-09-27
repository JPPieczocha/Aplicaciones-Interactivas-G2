import React from 'react';
import './../../App.css';

//Componentes
import NavBar from './../NavBar.js'
import HeaderGrid from '../HeaderGrid.js'
import Footer from "./../Footer"
import Slider from './../Slider'

export default function MenuPrincipal() {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        <HeaderGrid/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal">
        <Slider />
      </div>
      <Footer/>
    </div>
  );
}