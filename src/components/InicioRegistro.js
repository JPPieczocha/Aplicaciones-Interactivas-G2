import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import "./../App.css"

export default function InicioRegistro() {

  return (
    <div className="inicio">
     <ButtonGroup variant="text" aria-label="text primary button group" color="primary">
        <Button> Iniciar Sesión </Button>
        <Button> Registrarse </Button>
     </ButtonGroup>
    </div>
  );
}
