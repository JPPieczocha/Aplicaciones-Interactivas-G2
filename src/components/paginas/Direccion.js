import React from 'react';
import './../../App.css';
import {withScriptjs, withGoogleMap} from 'react-google-maps';

//Componentes
import NavBar from './../NavBar.js'
import AutoGrid from './../Grid.js'
import Footer from "./../Footer"
import Mapa from './../Mapa'

//const mapURL= 'googleMapURL= "https://maps.googleapis.com/maps/api/js?key=${CredencialMapa.mapsKey}'
const WrappedMap = withScriptjs(withGoogleMap(Mapa));


export default function Direccion() {
  return (
    <div className="App">
      <header className="App-barraTitulo">
        <AutoGrid/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal">
        <br/>
        <h2>Dirección: <span>Avenida Siempreviva 742, Springfield, Oregon, USA</span></h2>
        <br/>
        <div style={{width: '90vw', height: "60vh"}}>
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