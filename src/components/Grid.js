import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Desplegable from './Desplegable.js';
import InicioRegistro from './InicioRegistro.js'
import Grid from '@material-ui/core/Grid';
import logo from './../logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  },
}));
export default function AutoGrid() {
  const classes = useStyles();
//InicioRegistro o bien Desplegable//
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
         <img src={logo} className="App-logo" alt="logo" justify= "center" align= "left"/>
        Consultorio
        </Grid>
        <Grid item xs align='right'>
         <Desplegable/>
        </Grid>
      </Grid>
    </div>
  );
}
