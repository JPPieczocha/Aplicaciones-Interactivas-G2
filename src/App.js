import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MenuPrincipal from './components/paginas/MenuPrincipal.js';
import Direccion from './components/paginas/Direccion.js';
import SobreNosotros from './components/paginas/SobreNosotros.js';
import GestionRecetas from './components/paginas/GestionRecetas.js'
import GestionTurnos from './components/paginas/GestionTurnos.js'

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' component={MenuPrincipal} exact />
            <Route path='/direccion' component={Direccion} />
            <Route path='/about-us' component={SobreNosotros} />
            <Route path='/recetas' component={GestionRecetas}/>
            <Route path='/turnos' component={GestionTurnos}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
