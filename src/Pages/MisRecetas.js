import React from 'react';
import './../App.css';

//Componentes
import RecetasPacientes from './../components/RecetasPaciente';
import NavBar from '../components/Footer'
import HeaderGrid from '../components/HeaderGrid.js'
import Footer from "../components/Footer"


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