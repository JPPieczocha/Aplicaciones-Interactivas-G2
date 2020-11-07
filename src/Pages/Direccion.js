import React from 'react';
import './../App.css';
import {withScriptjs, withGoogleMap} from 'react-google-maps';

//Componentes
import NavBar from './../components/NavBar.js'
import HeaderGrid from '../components/HeaderGrid.js'
import Footer from "./../components/Footer"
import Mapa from './../components/Mapa'

//const mapURL= 'googleMapURL= "https://maps.googleapis.com/maps/api/js?key=${CredencialMapa.mapsKey}'
const WrappedMap = withScriptjs(withGoogleMap(Mapa));


export default function Direccion(props) {
  return (
    <div className="App">
      <header className="App-barraTitulo">
        <HeaderGrid sesion={props.sesion} cambio={props.cambiar}/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal-variante">
        <h3 align="center" className="titulos">Dirección: <span>Avenida Siempreviva 742, Springfield, Oregon, USA</span></h3>
        <div style={{height: "60vh"}}>
          <WrappedMap
              googleMapURL = {'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
              loadingElement={<div style={{ height: "100%"}} />}
              containerElement={<div style={{ height: "100%"}} />}
              mapElement={<div style={{ height: "100%"}} />}
          />
        </div>
        <br/>
      </div>
      <Footer/>
    </div>
  );
}