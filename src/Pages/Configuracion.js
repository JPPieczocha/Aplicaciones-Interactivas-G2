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
        <h1 className="titulos">Configuraciones</h1>
          <div style={{width:"40%", alignItems: "left"}}>
              <form autoComplete="off">

                  <h6 className="campos">DNI:</h6>
                    <input
                      type="text"
                      autoComplete="new-password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="dni"
                      placeholder={"42069"}
                      disabled
                    />


                  <h6 className="campos">Email:</h6>
                  <input
                    type="email"
                    className="form-control"
                    style={{margin:"20px"}}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder={"ejem@plo.com"}
                    disabled
                  />

                  <h6 className="campos">Obra social:</h6>
                  <input
                    type="text"
                    className="form-control"
                    style={{margin:"20px"}}
                    id="obraSocial"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese su obra social"
                  />
                  <input
                    type="number"
                    className="form-control"
                    style={{margin:"20px"}}
                    id="nroos"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese su número de Obra Social"
                  />

                  <h6 className="campos">Nueva Contraseña:</h6>
                    <input
                      type="password"
                      autoComplete="new-password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="exampleInputPassword1"
                      placeholder="Ingresar Contraseña"
                      required
                    />
                    <input
                      type="password"
                      autoComplete="new-password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="exampleInputPassword1"
                      placeholder="Confirmar Contraseña"
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


        /* <div className="loginbox">
          <h2>Login</h2>
          <form autoComplete="off">
            <p>Correo</p>
            <input type="text" name="" placeholder="Enter Username"></input>
            <p>Contrasena</p>
            <input type="password" name="" placeholder="Enter Password"></input>
            <input type="submit" name="" value="Login"></input>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <a href="#">¿No tiene cuenta?</a>
          </form>
        </div> */