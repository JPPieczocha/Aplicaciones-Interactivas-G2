import React from 'react';
import './../../App.css';
import { Link } from 'react-router-dom'

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
        <div className='App-principal-variante'>
        <h1 className="titulos">Configuraciones</h1>
          <div style={{width:"500px", alignItems: "left"}}>
              <form autoComplete="off">
                  <h6 className="campos" style={{margin:"20px"}}>Email:</h6>
                  <input
                    type="email"
                    className="form-control"
                    style={{margin:"20px"}}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ingresar Email"
                    required
                  />
                  <h6 className="campos" style={{margin:"20px"}}>Telefono:</h6>
                    <input
                      type="text"
                      autoComplete="new-password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="exampleInputPassword1"
                      placeholder="Ingresar Telefono"
                      required
                    />
                  <h6 className="campos" style={{margin:"20px"}}>Numero de Socio:</h6>
                    <input
                      type="text"
                      autoComplete="new-password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="exampleInputPassword1"
                      placeholder="Ingresar Numero de Socio"
                      required
                    />
                  <h6 className="campos" style={{margin:"20px"}}>Nueva Contraseña:</h6>
                    <input
                      type="password"
                      autoComplete="new-password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="exampleInputPassword1"
                      placeholder="Ingresar Contrasena"
                      required
                    />
                  <h6 className="campos" style={{margin:"20px"}}>Confirmar Nueva Contraseña:</h6>
                    <input
                      type="password"
                      autoComplete="new-password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="exampleInputPassword1"
                      placeholder="Reingresar Contrasena"
                      required
                      />
                    
              </form>
            </div>
            <Link to={'/'}>
              <button type="submit" className="btn btn-primary botonConfig" style={{margin:"20px"}}>Guardar Cambios</button>
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