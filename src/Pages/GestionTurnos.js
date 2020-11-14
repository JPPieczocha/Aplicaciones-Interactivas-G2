import React, { useState } from 'react';
import './../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Calendario from './../components/Calendario.js'
import Grid from '@material-ui/core/Grid';
import {Button, Modal} from '@material-ui/core';

//Componentes
import NavBar from '../components/NavBar.js'
import HeaderGrid from '../components/HeaderGrid.js'
import Footer from "../components/Footer"
import ModalGestionTurno from '../components/ModalGestionTurno'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px",
    maxWidth:"100%",
    Height: "600px",
  },
  paper: {
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 210px)'
  },
}));

export default function GestionTurnos(props) {
  const classes = useStyles();

  const [modal, setModal] = useState(false)

  return (
    <div>
      <div className="App">
        <header className="App-barraTitulo">
          <HeaderGrid sesion={props.sesion} cambio={props.cambiar}/>
        </header>
        <div className="App-header">
          <NavBar/>
        </div>
        <div className="App-principal-variante">
          <h1 className="titulos">Gestión de turnos</h1>
          <grid container className="row" style={{width: '100%'}} align="center">
            <Grid item xs style={{maxWidth: '400px', paddingTop:'60px'}}>
            <h5 className="subtitulos">¿Qué desea hacer?</h5>
            <hr />
            <Button variant="contained" className="boton" style={{margin:"30px 0px", height:"100px"}} onClick={() => setModal(true)}>Tomar Turno</Button>
            <hr/>
            <Button variant="contained" className="boton" style={{margin:"30px 0px", height:"100px"}}>Cancelar Turno</Button>
            </Grid>
            <Grid item xs className={classes.root}>
            <Calendario justify="center"/>
            </Grid>
          </grid>
        </div>
        <Footer/>
      </div>
      <Modal
        open={modal}
        onClose={() => setModal(false)}>
          <div className={classes.paper}>
            <ModalGestionTurno/>
          </div>
      </Modal>
    </div>
   
  );
}