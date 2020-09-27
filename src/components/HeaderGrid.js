import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Desplegable from './Desplegable.js';
import InicioRegistro from './InicioRegistro.js'
import Grid from '@material-ui/core/Grid';
import logo from './../logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    padding: 0,
    display:"flex",
    flexDirection: "row",
  },
  size:{
    maxWidth: "100px",
  }
}));
export default function HeaderGrid() {
  const classes = useStyles();
//InicioRegistro o bien Desplegable//
  return (
    <div className={classes.root}>
      <Grid container className={classes.root}>
        <Grid item xs>
        <img src={logo} className="App-logo" alt="logo" align= "left"/>
        Consultorio
        </Grid>
        <Grid item xs className={classes.size} align='right'>
         <Desplegable/>
        </Grid>
      </Grid>
    </div>
  );
}
