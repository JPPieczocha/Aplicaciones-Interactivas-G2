import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import "./../App.css"
import { Link } from 'react-router-dom';

export default function NavBar() {

  return (
    <div className="align-items-center">
     <ButtonGroup variant="text" aria-label="text primary button group">
        <Link to={'/'}>
          <Button className="boton" color="primary"> Home </Button>
        </Link>
        <Link to={'/direccion'}>
          <Button className="boton" color="primary"> ¿Cómo llego? </Button>
        </Link>
        <Link to={'/about-us'}>
          <Button className="boton" color="primary"> Sobre nosotros </Button>
        </Link>
     </ButtonGroup>
    </div>
  );
}
