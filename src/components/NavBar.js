import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import "./../App.css"

export default function NavBar() {

  return (
    <div>
     <ButtonGroup variant="text" aria-label="text primary button group">
        <Button className="boton" color="primary"> Home </Button>
        <Button className="boton" color="primary"> ¿Cómo llego? </Button>
        <Button className="boton" color="primary"> Sobre nosotros </Button>
     </ButtonGroup>
    </div>
  );
}
