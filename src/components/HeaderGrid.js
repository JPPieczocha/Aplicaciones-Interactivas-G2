import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Desplegable from './Desplegable.js';
import InicioRegistro from './InicioRegistro.js'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flexDirection: "row",
    maxWidth: "100%",
  },
  derecha:{
    maxWidth: 'inherit',
    marginRight:'20px',
  },
}));
export default function HeaderGrid(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs style={{marginLeft:"10px", fontSize:"50px"}}>
        ConsulClaudio
        </Grid>
        <Grid item xs className={classes.derecha} align='right'>
         {props.sesion ? <Desplegable cambio={props.cambio}/>: <InicioRegistro/>}
        </Grid>
      </Grid>
    </div>
  );
}
