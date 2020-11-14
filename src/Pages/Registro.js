import React from 'react';
import { Link } from 'react-router-dom'

//Estilos
import './../App.css';

//Componentes
import HeaderGrid from '../components/HeaderGrid.js'
import Footer from "../components/Footer"
import NavBar from '../components/NavBar';

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      email: '',
      confirmEmail: '',
      dni: '',
      password: '',
      confirmPassword: '',
      sesion: props.sesion,
      cambio: props.cambiar
    }
    this.handleName = this.handleName.bind(this)
    this.handleAddress = this.handleAddress.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleConfirmEmail = this.handleConfirmEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
    this.handleDNI = this.handleDNI.bind(this)
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleConfirmEmail(e) {
    this.setState({
      confirmEmail: e.target.value
    })
  }

  handleDNI(e) {
    this.setState({
      dni: e.target.value
    })
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-barraTitulo">
          <HeaderGrid sesion={this.state.sesion} cambio={this.state.cambio}/>
        </header>
        <div className="App-header">
          <NavBar align="center"/>
        </div>
        <form>
          <div className="register">
            <div className="content">
              <header>Registrarse</header>
              <div className="field space">
                <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombre"
                onChange={this.handleName}
                required
                />
              </div>
              <div className="field space">
                <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder="Apellido"
                onChange={this.handlePassword}
                required
                />
              </div>
              <div className="field space">
                <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="Email"
                onChange={this.handleEmail}
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
                onChange={this.handleConfirmEmail}
                required
                />
              </div>
              <div className="field space">
                <input
                type="number"
                className="form-control"
                id="DNI"
                aria-describedby="emailHelp"
                placeholder="Ingrese su DNI"
                onchange={this.handleDNI}
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
                onchange={this.handlePassword}
                required
                />
              </div>
              <div className="field space">
                <input
                type="password"
                autoComplete="new-password"
                className="form-control"
                id="exampleConfirmPassword1"
                placeholder="Confirme contraseña"
                onchange={this.handleConfirmPassword}
                required
                />
              </div>
              <Link to={'/'}><button className="btn btn-primary" style={{margin:"30px 20px"}} onClick={this.state.cambio}>Registrarse</button></Link>
            </div>
          </div>
        </form>
        <Footer/>
      </div>
    )
  };
  }