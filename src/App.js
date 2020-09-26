import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MenuPrincipal from './components/paginas/MenuPrincipal';
import Direccion from './components/paginas/Direccion';
import Login from './components/paginas/Login'
import Register from './components/paginas/Register'
import IngresarNovedades from './components/paginas/IngresarNovedades'
import ActualizarHistorial from './components/paginas/ActualizarHistorial'
import ConsultarHistorial from './components/paginas/ConsultarHistorial'


class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      sesion: true
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
            <Route path='/' component={MenuPrincipal} exact/>
            <Route path='/direccion' component={Direccion} />
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/cargarNovedades' component={IngresarNovedades} />
            <Route path='/actualizarHistorial' component={ActualizarHistorial} />
            <Route path='/consultarHistorial' component={ConsultarHistorial} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
