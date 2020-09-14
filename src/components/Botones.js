import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import "./../assets/Botones.css"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Botones() {
  const classes = useStyles();

  return (
    <div className="boton">
      <Button> 
        Home
      </Button>
      <Button>
        ¿Cómo llego?
      </Button>
      <Button>
        Sobre nosotros
      </Button>
    </div>
  );
}
