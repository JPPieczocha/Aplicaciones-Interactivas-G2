import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import "./../App.css"
import { Link } from 'react-router-dom'

export default function InicioRegistro(props) {

  return (
    <div className="inicio">
     <ButtonGroup variant="text" aria-label="text primary button group" color="primary">
        <Link to={'/login'}><Button> Iniciar Sesión </Button></Link>
        <Link to={'/register'}><Button> Registrarse </Button></Link>
     </ButtonGroup>
    </div>
  );
}
