import React from 'react';
import {GoogleMap, Marker} from 'react-google-maps';
//import CredencialMapa from './../CredencialMapa';


export default function Mapa(){
    return (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{lat: -34.635662,lng: -58.364722}}
      >
            <Marker position = {{lat: -34.635662,lng: -58.364722}} />
        </GoogleMap>
    );
}