import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import "./../App.css"
import { Link } from 'react-router-dom'

export default function InicioRegistro(props) {

  return (
    <div>
     <ButtonGroup variant="text">
        <Link to={'/login'}><Button className="boton"> Iniciar Sesión </Button></Link>
        <Link to={'/register'}><Button className="boton"> Registrarse </Button></Link>
     </ButtonGroup>
    </div>
  );
}
