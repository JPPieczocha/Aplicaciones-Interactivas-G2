import React from 'react';
import './../../App.css';
import { Link } from 'react-router-dom'

//Estilos
import './../../App.css';

//Componentes
import AutoGrid from './../HeaderGrid.js'
import Footer from "./../Footer"
import NavBar from './../NavBar'

export default function MenuPrincipal(props) {
  return (
    <div className="App">
      <header className="App-barraTitulo">
        <AutoGrid sesion={props.sesion} cambio={props.cambiar}/>
      </header>
      <div className="App-header">
        <NavBar align="center"/>
      </div>
      <div className='loginRegister'>
        <h2>Login</h2>
        <div className="row">
            <form autoComplete="off">
              <div className="form-group">
                <h7>Correo:</h7>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <h7>Contraseña:</h7>
                  <input
                    type="password"
                    autoComplete="new-password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
              </div>
              <Link to={'/'}><button className="btn btn-primary" onClick={props.cambiar}>Ingresar</button></Link>
            </form>
        </div>
        <hr/>
        <h6>¿Olvidaste tu contraseña? Puedes recuperarla haciendo click <a href='https://www.youtube.com/watch?v=fC7oUOUEEi4&ab_channel=StackMan'>acá</a>.</h6>
        <br/>
        <h6>¿No tiene cuenta? Puedes registrarte haciendo click <Link to={'/Register'}>acá</Link>.</h6>
      </div>
      <Footer/>
    </div>
  );
}