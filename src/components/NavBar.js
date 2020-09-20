import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import "./../App.css"
import { Link } from 'react-router-dom';

export default function NavBar() {

  return (
    <div>
     <ButtonGroup variant="text" aria-label="text primary button group">
        <Link to={'/'}>
          <Button className="boton" color="primary"> Home </Button>
        </Link>
        <Link to={'/Direccion'}>
          <Button className="boton" color="primary"> ¿Cómo llego? </Button>
        </Link>
        <Link to={'/'}>
         <Button className="boton" color="primary"> Sobre nosotros </Button>
        </Link>
     </ButtonGroup>
    </div>
  );
}
