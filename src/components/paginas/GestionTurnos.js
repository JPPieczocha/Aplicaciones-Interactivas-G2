import React from 'react';
import './../../App.css';
import Calendario from './../Calendario.js'
import Container from '@material-ui/core/Container';

//Componentes
import NavBar from '../NavBar.js'
import HeaderGrid from '../HeaderGrid.js'
import Footer from "../Footer"

export default function GestionTurnos() {
  return (
    <div className="App">
      <header className="App-barraTitulo">
        <HeaderGrid/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal-variante">
        <h1 className="titulos">Gestión de turnos</h1>
        <Container align="center">
          <Calendario justify="center"/>
        </Container>
      </div>
      <Footer/>
    </div>
   
  );
}