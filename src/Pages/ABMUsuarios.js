import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom'

//Componentes
import Header from './../components/HeaderGrid.js'
import Footer from "./../components/Footer"
import NavBar from './../components/NavBar'

import {Grid} from '@material-ui/core'

export default function Configuración(props) {

    return (
      <div className="App">
        <header className="App-barraTitulo">
          <Header sesion={props.sesion} cambio={props.cambiar}/>
        </header>
        <div className="App-header">
          <NavBar align="center"/>
        </div>
        <div className='App-principal-variante'>
        <h1 className="titulos">Configuraciones</h1>
          <div style={{width:"40%", alignItems: "left"}}>
              <form autoComplete="off">

                    <h6 className="campos">Nombre:</h6>
                    <input
                      type="text"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="nombre"
                      placeholder="Ingresar Nombre"
                      required
                    />

                    <h6 className="campos">Apellido:</h6>
                    <input
                      type="text"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="apellido"
                      placeholder="Ingresar apellido"
                      required
                    />

                    <h6 className="campos">DNI:</h6>
                    <input
                    type="text"
                    autoComplete="new-password"
                    className="form-control"
                    style={{margin:"20px"}}
                    id="exampleInputPassword1"
                    placeholder="Ingresar Numero de DNI"
                    required
                    />


                  <h6 className="campos">Email:</h6>
                  <input
                    type="email"
                    className="form-control"
                    style={{margin:"20px"}}
                    id="exampleInputEmail1"
                    placeholder="Ingresar Email"
                    required
                  />
                  <input
                    type="email"
                    className="form-control"
                    style={{margin:"20px"}}
                    id="confirmEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Confirmar Email"
                    required
                  />

                    <h6 className="campos">Contraseña:</h6>
                    <input
                      type="password"
                      autoComplete="new-password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="exampleInputPassword1"
                      placeholder="Ingresar Contrasena"
                      required
                    />
                    <input
                      type="password"
                      autoComplete="new-password"
                      className="form-control"
                      style={{margin:"20px"}}
                      id="exampleInputPassword1"
                      placeholder="Confirmar Contrasena"
                      required
                      />

                    <h6 className="campos">Permisos:</h6>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <label className="checkText">Médico/a [Espoecialidad]</label> <input type="checkbox"/><br/>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <label className="checkText">Médico/a [Espoecialidad]</label> <input type="checkbox"/><br/>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <label className="checkText">Médico/a [Espoecialidad]</label> <input type="checkbox"/><br/>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <label className="checkText">Médico/a [Espoecialidad]</label> <input type="checkbox"/><br/>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <label className="checkText">Médico/a [Espoecialidad]</label> <input type="checkbox"/><br/>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <label className="checkText">Médico/a [Espoecialidad]</label> <input type="checkbox"/><br/>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <label className="checkText">Médico/a [Espoecialidad]</label> <input type="checkbox"/><br/>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <label className="checkText">Secretario/a</label> <input type="checkbox"/><br/>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <label className="checkText">Administrador/a</label> <input type="checkbox"/><br/>
                        </Grid>
                    </Grid>
                    
                    

                    
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