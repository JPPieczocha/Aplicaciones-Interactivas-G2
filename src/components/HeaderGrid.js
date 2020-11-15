import React from 'react';
import Desplegable from './Desplegable.js';
import InicioRegistro from './InicioRegistro.js';
import Logo from '../assets/img/consulclaudio.png';

export default function HeaderGrid(props) {
  return (
    <div >
      <div className="row align-items-center" style={{width:"100%"}}>
        <div className="col" align='left'>
        <img src={Logo} className="App-Logo" alt=''/>
        </div>
        <div className="col align-items-center" align='right'>
         {props.sesion ? <Desplegable cambio={props.cambio}/>: <InicioRegistro/>}
        </div>
      </div>
    </div>
  );
}
