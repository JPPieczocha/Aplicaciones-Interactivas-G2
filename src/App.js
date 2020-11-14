import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MenuPrincipal from './Pages/MenuPrincipal';
import Direccion from './Pages/Direccion';
import Login from './Pages/Login';
import Register from './Pages/Registro';
import Configuracion from './Pages/Configuracion';
import IngresarNovedades from './Pages/IngresarNovedades';
import ActualizarHistorial from './Pages/ActualizarHistorial';
import ConsultarHistorial from './Pages/ConsultarHistorial';
import SobreNosotros from './Pages/SobreNosotros.js';
import GestionRecetas from './Pages/GestionRecetas.js';
import GestionTurnos from './Pages/GestionTurnos.js';
import MisRecetas from './Pages/MisRecetas.js';
import ABMUsuarios from './Pages/ABMUsuarios'
import Novedades from './Pages/Novedades'


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
            <Route path='/register' component={() => <Register sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
            <Route path='/cargarNovedades' component={() => <IngresarNovedades sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/actualizarHistorial' component={() => <ActualizarHistorial sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/consultarHistorial' component={() => <ConsultarHistorial sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/configuracion' component={() => <Configuracion sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/about-us' component={() => <SobreNosotros sesion={this.state.sesion} cambiar={this.cambiaSesion}/>} />
            <Route path='/recetas' component={() => <GestionRecetas sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
            <Route path='/turnos' component={() => <GestionTurnos sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
            <Route path='/login' component={() => <Login sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
            <Route path='/mis-recetas' component={() => <MisRecetas sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
            <Route path='/ABMUsuarios' component={() => <ABMUsuarios sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
            <Route path='/Novedades' component={() => <Novedades sesion={this.state.sesion} cambiar={this.cambiaSesion}/>}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
