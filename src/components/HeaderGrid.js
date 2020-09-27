import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Desplegable from './Desplegable.js';
import InicioRegistro from './InicioRegistro.js'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    padding: 0,
    display:"flex",
    flexDirection: "row",
    maxWidth: "100%",
  },
  derecha:{
    maxWidth: 'inherit',
    marginRight:'20px',
  },
}));
export default function HeaderGrid() {
  const classes = useStyles();
//InicioRegistro o bien Desplegable//
  return (
    <div className={classes.root}>
      <Grid container className={classes.root}>
        <Grid item xs>
        Consultorio
        </Grid>
        <Grid item xs className={classes.derecha} align="right">
         <Desplegable/>
        </Grid>
      </Grid>
    </div>
  );
}
