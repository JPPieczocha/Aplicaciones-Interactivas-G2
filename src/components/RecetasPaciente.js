import React from 'react';
import './../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
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

export default function RecetasPacientes (props) {
  const classes = useStyles();
  return (
    <div style={{width: '100%'}}>
      <h5 className="subtitulos">Elija una receta:</h5>
        <div className={classes.root} align="center">
      <Grid container className={classes.root} >
        
        <Grid item xs align="center">
        <Button
        variant="contained"
        size="large"
        className={classes.boton}
      > 2020-25-09 | 10:30
        </Button>
        </Grid>
        <Grid item xs align="center">
        <Button
        variant="contained"
        size="large"
        className={classes.boton}
      > 2020-20-09 | 13:00
        </Button>
        </Grid>
        <Grid item xs align="center">
        <Button
        variant="contained"
        size="large"
        className={classes.boton}
      > 2020-19-09 | 18:30
        </Button>
        </Grid>
      </Grid>
      </div>
      <h5 className="subtitulos">(Una vez vencidas las recetas, estas serán borradas del historial.)</h5>
      </div>
  );
}