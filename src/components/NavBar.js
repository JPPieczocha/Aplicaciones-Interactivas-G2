import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import "./../App.css"

export default function NavBar() {

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
