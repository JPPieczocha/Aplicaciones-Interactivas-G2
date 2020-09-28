import React from 'react';
import './../../App.css';
import { Link } from 'react-router-dom'

//Estilos
import './../../App.css';

//Componentes
import AutoGrid from './../HeaderGrid.js'
import Footer from "./../Footer"
import NavBar from './../NavBar'

export default function Register(props) {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        <AutoGrid sesion={props.sesion} cambio={props.cambiar}/>
      </header>
      <div className="App-header">
        <NavBar align="center"/>
      </div>
      <div className='App-principal-variante'>
      <h1 className="titulos">Registro</h1>
        <div className="row" style={{paddingLeft:"60px"}}>
            <form autoComplete="off">
              <div className="form-group">
                <h7 className="campos">Nombre:</h7>
                <input
                  style={{margin:"20px"}}
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Ingrese su nombre"
                  required
                />
              </div>
              <div className="form-group">
              <h7 className="campos">Apellido:</h7>
                <input
                  style={{margin:"20px"}}
                  type="text"
                  className="form-control"
                  id="apellido"
                  placeholder="Ingrese su apellido"
                  required
                />
              </div>
              <div className="form-group">
                <h7 className="campos">Correo:</h7>
                <input
                  style={{margin:"20px"}}
                  type="email"
                  className="form-control"
                  id="correo"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <h7 className="campos">Confirme su correo:</h7>
                <input
                  style={{margin:"20px"}}
                  type="email"
                  className="form-control"
                  id="correoConfirm"
                  aria-describedby="emailHelp"
                  placeholder="Confirm email"
                  required
                />
              </div>
              <div className="form-group">
                <h7 className="campos">Contraseña:</h7>
                <input
                  style={{margin:"20px"}}
                  type="password"
                  autoComplete="new-password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <h7 className="campos">Confirme su contraseña:</h7>
                <input
                  style={{margin:"20px"}}
                  type="password"
                  autoComplete="new-password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <Link to={'/'}><button style={{margin:"30px 20px"}} className="btn btn-primary" onClick={props.cambiar}>Registrarse</button></Link>
            </form>
        </div>
        <h6 style={{paddingLeft:"60px"}}>¿Tiene cuenta? Puedes iniciar sesión haciendo click <Link to={'/Login'}>acá</Link>.</h6>
      </div>
      <Footer/>
    </div>
  );
}