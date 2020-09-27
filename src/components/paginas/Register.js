import React from 'react';
import './../../App.css';
import { Link } from 'react-router-dom'

//Estilos
import './../../App.css';

//Componentes
import AutoGrid from './../HeaderGrid.js'
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
      <div className='loginRegister'>
        <h2>Registro</h2>
        <div className="row">
            <form autoComplete="off">
              <div className="form-group">
                <h7>Nombre:</h7>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Ingrese su nombre"
                  required
                />
              </div>
              <div className="form-group">
              <h7>Apellido:</h7>
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  placeholder="Ingrese su apellido"
                  required
                />
              </div>
              <div className="form-group">
                <h7>Correo:</h7>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <h7>Confirme su correo:</h7>
                <input
                  type="email"
                  className="form-control"
                  id="correoConfirm"
                  aria-describedby="emailHelp"
                  placeholder="Confirm email"
                  required
                />
              </div>
              <div className="form-group">
                <h7>Correo:</h7>
                <input
                  type="password"
                  autoComplete="new-password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <h7>Confirme su contraseña:</h7>
                <input
                  type="password"
                  autoComplete="new-password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <Link to={'/'}><button type="submit" className="btn btn-primary" >Registrarse</button></Link>
            </form>
        </div>
        <hr/>
        <h6>¿Tiene cuenta? Puedes iniciar sesión haciendo click <Link to={'/Login'}>acá</Link>.</h6>
      </div>
      <Footer/>
    </div>
  );
}