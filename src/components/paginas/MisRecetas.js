import React from 'react';
import './../../App.css';
import RecetasPacientes from './../RecetasPaciente';

//Componentes
import NavBar from '../NavBar.js'
import HeaderGrid from '../HeaderGrid.js'
import Footer from "../Footer"


export default function GestionRecetas(props) {
  return (
    <div className="App">
      <header className="App-barraTitulo">
        <HeaderGrid sesion={props.sesion} cambio={props.cambiar}/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal-variante">
        <h1 className="titulos">Gestión de recetas</h1>
        <RecetasPacientes/>
      </div>
      <Footer/>
    </div>
   
  );
}