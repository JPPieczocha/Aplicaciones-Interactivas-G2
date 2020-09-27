import React from 'react';
import './../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core';


//Componentes
import NavBar from '../NavBar.js'
import HeaderGrid from '../HeaderGrid.js'
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    padding: 0,
    display:"flex",
    flexDirection: "row",
    margin: "12px 0px",
  },
  boton:{
    backgroundImage: 'linear-gradient(0deg, #DEC9DB, #E2EFFF)',
    color: "#666666",
    height: "120px",
    width: "280px",
    fontStyle: "oblique",
    fontSize: "20px",
    margin: "20px",
  }
}));
export default function GestionRecetas() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-barraTitulo">
        <HeaderGrid/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal-variante">
        <h1 className="titulos">Gestión de recetas</h1>
        <h5 className="subtitulo">Elija una receta:</h5>
        <div style={{width: '100%'}}>
        <div className={classes.root} align="center">
      <Grid container className={classes.root} >
        <Grid item xs align="center">
        <Button
        variant="contained"
        size="large"
        className={classes.boton}
      > 2020-10-04 | 18:30
        </Button>
        </Grid>
        <Grid item xs align="center">
        <Button
        variant="contained"
        size="large"
        className={classes.boton}
      > 2020-20-01 | 18:30
        </Button>
        </Grid>
        <Grid item xs align="center">
        <Button
        variant="contained"
        size="large"
        className={classes.boton}
      > 2020-20-01 | 18:30
        </Button>
        </Grid>
      </Grid>
    </div>
        </div>
        <h5 className="subtitulo">(Una vez vencidas las recetas, estas serán borradas del historial.)</h5>
      </div>
      <Footer/>
    </div>
   
  );
}