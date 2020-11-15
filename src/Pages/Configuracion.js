import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom'

//Componentes
import AutoGrid from './../components/HeaderGrid.js'
import Footer from "./../components/Footer"
import NavBar from './../components/NavBar'

export default function Configuración(props) {

    return (
      <div className="App">
        <header className="App-barraTitulo">
          <AutoGrid sesion={props.sesion} cambio={props.cambiar}/>
        </header>
        <div className="App-header">
          <NavBar align="center"/>
        </div>
        <div className='App-principal-variante'>
        <h1 className="titulos">Datos y Configuración</h1>
          <div style={{width:"40%", alignItems: "left"}}>
              <form autoComplete="off">

                  <h6 className="campos">DNI:</h6>
                    <input
                      type="text"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="dni"
                      value={"42069"}
                      disabled
                    />
              <div className="row" style={{width:"100%"}}>
                    <div className="col">
                    <h6 className="campos">Nombre:</h6>
                    <input
                    align="center"
                      type="text"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="nombre"
                      value={"Clara"}
                      disabled
                    /></div>
                     <div className="col">
                     <h6 className="campos">Apellido:</h6>
                    <input
                    align="center"
                      type="text"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="nombre"
                      value={"Gomez"}
                      disabled
                    />
                    </div>
                    </div>
        
                  <h6 className="campos">Email:</h6>
                  <input
                    type="email"
                    className="form-control"
                    style={{margin:"20px"}}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={"ejem@plo.com"}
                    disabled
                  />

                  <h6 className="campos">Nueva Contraseña:</h6>
                    <input
                      type="password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="exampleInputPassword1"
                      placeholder="Contraseña Actual"
                      required
                    />
                    <input
                      type="password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="exampleInputPassword1"
                      placeholder="Contraseña Nueva"
                      required
                      />
                    
              </form>
            </div>
            <Link to={'/'}>
              <button type="submit" className="btn btn-primary" style={{margin:"30px 20px"}}>Guardar Cambios</button>
            </Link>
          </div>
          <Footer/>
        </div>
    );
  }