import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MenuPrincipal from './components/paginas/MenuPrincipal';
import Direccion from './components/paginas/Direccion';
import Login from './components/paginas/Login'
import Register from './components/paginas/Register'
import Configuracion from './components/paginas/Configuracion'
import IngresarNovedades from './components/paginas/IngresarNovedades'
import ActualizarHistorial from './components/paginas/ActualizarHistorial'
import ConsultarHistorial from './components/paginas/ConsultarHistorial'
import SobreNosotros from './components/paginas/SobreNosotros.js';
import GestionRecetas from './components/paginas/GestionRecetas.js'
import GestionTurnos from './components/paginas/GestionTurnos.js'

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      sesion: false
    }

    this.cambiaSesion = this.cambiaSesion.bind(this) 
  }

  cambiaSesion(e) {
    this.setState({sesion: !this.state.sesion})
  }

  render(){
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' component={() => <MenuPrincipal sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} exact/>
            <Route path='/direccion' component={() => <Direccion sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/login' component={() => <Login sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
            <Route path='/register' component={() => <Register sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
            <Route path='/cargarNovedades' component={() => <IngresarNovedades sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/actualizarHistorial' component={() => <ActualizarHistorial sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/consultarHistorial' component={() => <ConsultarHistorial sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/configuracion' component={() => <Configuracion sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/about-us' component={() => <SobreNosotros sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/recetas' component={() => <GestionRecetas sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
            <Route path='/turnos' component={() => <GestionTurnos sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
