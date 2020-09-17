import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import "./../App.css"
import { Link } from 'react-router-dom';

export default function NavBar() {

  return (
    <div>
     <ButtonGroup variant="text" aria-label="text primary button group">
        <Link to={'/'}>
          <Button className="boton" color="primary" align="center"> Home </Button>
        </Link>
        <Link to={'/Direccion'}>
          <Button className="boton" color="primary" align="center"> ¿Cómo llego? </Button>
        </Link>
         <Button className="boton" color="primary" align="center"> Sobre nosotros </Button>
     </ButtonGroup>
    </div>
  );
}
