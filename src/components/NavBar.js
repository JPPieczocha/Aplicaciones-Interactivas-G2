import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import "./../App.css"
import { Link } from 'react-router-dom';

export default function NavBar() {

  return (
    <div className="boton">
     <ButtonGroup variant="text" aria-label="text primary button group">
        <Link to={'/'}>
          <Button> Home </Button>
        </Link>
        <Link to={'/Direccion'}>
          <Button> ¿Cómo llego? </Button>
        </Link>
        <Button> Sobre nosotros </Button>
     </ButtonGroup>
    </div>
  );
}
