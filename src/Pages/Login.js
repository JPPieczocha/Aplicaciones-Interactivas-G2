import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom'

//Estilos
import './../App.css';

//Componentes
import HeaderGrid from '../components/HeaderGrid.js'
import Footer from "../components/Footer"
import NavBar from '../components/NavBar'
import UserIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';


export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        sesion: props.sesion,
        cambio: props.cambiar,
        email: '',
        password: ''
    }

    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handleEmail(e) {
    this.setState({
      name: e.target.value
    })
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
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
        <div className="login">
          <div className="content">
            <header>Iniciar Sesión</header>
            <form>
              <div className="field space">
                <UserIcon/>
                <input type="email" required placeholder="Email" onChange={this.handleEmail}></input>
              </div>
              <div className="field space">
                <LockIcon/>
                <input type="password" className="password" required placeholder="Contraseña" onChange={this.handlePassword}></input>
              </div>
              <Link to={'/'}><button type="submit" className="btn btn-primary" style={{margin:"30px 20px"}} onClick={this.state.cambio}>Iniciar Sesión</button></Link>
              <div style={{marginBottom: "10px", textAlign:"center"}}>
                <Link to={'/'}>¿Olvidaste tu contraseña?</Link>
              </div>
              <div style={{margin: "10px 0px", textAlign:"center"}}>
                <Link to={'/register'}> ¿No tenes cuenta? Registrate Ahora </Link>
              </div>
              
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  
}