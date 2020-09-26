import React from 'react';
import './../../App.css';
import { Link } from 'react-router-dom'

//Componentes
import AutoGrid from './../Grid.js'
import Footer from "./../Footer"
import NavBar from './../NavBar'

export default function MenuPrincipal() {

    return (
      <div className="App">
        <header className="App-barraTitulo">
          <AutoGrid/>
        </header>
        <div className="App-header">
          <NavBar align="center"/>
        </div>
        <div className='Configuracion'>
          <h2>Configuraciones</h2>
          <div className="row">
              <form autoComplete="off">
                <div className="form-group">
                  <h6>Email:</h6>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ingresar Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <h6>Telefono:</h6>
                    <input
                      type="text"
                      autoComplete="new-password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Ingresar Telefono"
                      required
                    />
                </div>
                <div className="form-group">
                  <h6>Numero de Socio:</h6>
                    <input
                      type="text"
                      autoComplete="new-password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Ingresar Numero de Socio"
                      required
                    />
                </div>
                <div className="form-group">
                  <h6>Nueva Contraseña:</h6>
                    <input
                      type="password"
                      autoComplete="new-password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Ingresar Contrasena"
                      required
                    />
                </div>
                <div className="form-group">
                  <h6>Confirmar Nueva Contraseña:</h6>
                    <input
                      type="password"
                      autoComplete="new-password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Reingresar Contrasena"
                      required
                    />
                </div>
              </form>
            </div>
            <Link to={'/'}>
              <button type="submit" className="btn btn-primary botonConfig">Salvar Cambios</button>
            </Link>
          </div>
          <Footer/>
        </div>
    );
  }


        {/* <div className="loginbox">
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
        </div> */}