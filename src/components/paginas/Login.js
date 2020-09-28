import React from 'react';
import './../../App.css';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

//Estilos
import './../../App.css';

//Componentes
import HeaderGrid from '../HeaderGrid.js'
import Footer from "../Footer"
import NavBar from '../NavBar'
import UserIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
  root:{
    margin: theme.spacing(1),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-barraTitulo">
        <HeaderGrid sesion={props.sesion} cambio={props.cambiar}/>
      </header>
      <div className="App-header">
        <NavBar align="center"/>
      </div>
      <div className="login">
        <div className="content">
          <header>Iniciar Sesión</header>
          <form>
            <div className="field space">
              <UserIcon className={classes.root}/>
              <input type="text" required placeholder="Email"></input>
            </div>
            <div className="field space">
              <LockIcon className={classes.root}/>
              <input type="password" className="password" required placeholder="Contraseña"></input>
            </div>
            <Link to={'/'}><button className="btn btn-primary" style={{margin:"30px 20px"}} onClick={props.cambiar}>Iniciar Sesión</button></Link>
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
  );
}