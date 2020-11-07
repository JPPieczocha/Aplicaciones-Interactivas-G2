import React from 'react';
import { Link } from 'react-router-dom'

//Estilos
import './../App.css';

//Componentes
import HeaderGrid from '../components/HeaderGrid.js'
import Footer from "../components/Footer"
import NavBar from '../components/NavBar';

export default function Login(props) {
  return (
    <div className="App">
      <header className="App-barraTitulo">
        <HeaderGrid sesion={props.sesion} cambio={props.cambiar}/>
      </header>
      <div className="App-header">
        <NavBar align="center"/>
      </div>
      <div className="register">
        <div className="content">
          <header>Registrarse</header>
          <form>
            <div className="field space">
            <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Nombre"
                  required
                />
            </div>
            <div className="field space">
            <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  placeholder="Apellidos"
                  required
                />
            </div>
            <div className="field space">
            <input
                  type="email"
                  className="form-control"
                  id="correo"
                  placeholder="Email"
                  required
                />
            </div>
            <div className="field space">
            <input
                  type="email"
                  className="form-control"
                  id="correoConfirm"
                  aria-describedby="emailHelp"
                  placeholder="Confirme email"
                  required
                />
</div>
            <div className="field space">
            <input
                  type="password"
                  autoComplete="new-password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                  required
                />
                </div>
            <div className="field space">
            <input
                  type="password"
                  autoComplete="new-password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirme contraseña"
                  required
                />
                </div>

            <Link to={'/'}><button className="btn btn-primary" style={{margin:"30px 20px"}} onClick={props.cambiar}>Registrarse</button></Link>
            
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}