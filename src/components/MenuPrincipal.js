import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, ButtonGroup} from '@material-ui/core';
import "./../assets/MenuPrincipal.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MenuPrincipal() {
  const classes = useStyles();

  return (
    <div className="boton">
     <ButtonGroup variant="text" aria-label="text primary button group">
      <Button> Home </Button>
      <Button> ¿Cómo llego? </Button>
      <Button> Sobre nosotros </Button>
     </ButtonGroup>
    </div>
  );
}
