import React from 'react';
import './../../App.css';
import { Link } from 'react-router-dom'

//Componentes
import AutoGrid from './../Grid.js'
import Footer from "./../Footer"

export default function MenuPrincipal() {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        <AutoGrid/>
      </header>
      <h2>Login</h2>
      <div className="row">
        <div class="col-lg-3 col-centered">
          <form autoComplete="off">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                autoComplete="new-password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <Link to={'/'}><button type="submit" className="btn btn-primary">Ingresar</button></Link>
          </form>
        </div>
      </div>
      <hr/>
      <h6>¿Olvidaste tu contraseña? Puedes recuperarla haciendo click <a href='https://www.youtube.com/watch?v=fC7oUOUEEi4&ab_channel=StackMan'>acá</a>.</h6>
      <br/>
      <h6>¿No tiene cuante? Puedes registrarte haciendo click <Link to={'/Register'}>acá</Link>.</h6>
      <Footer/>
    </div>
  );
}