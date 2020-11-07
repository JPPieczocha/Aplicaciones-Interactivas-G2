import React from 'react';
import './../App.css';

//Componentes
import NavBar from './../components/NavBar.js'
import HeaderGrid from '../components/HeaderGrid.js'
import Footer from "./../components/Footer"
import Slider from './../components/Slider'

export default function MenuPrincipal(props) {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        <HeaderGrid sesion={props.sesion} cambio={props.cambiar}/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal"  style={{paddingTop: "15px"}}>
        <Slider />
      </div>
      <Footer/>
    </div>
  );
}