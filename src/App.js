import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MenuPrincipal from './components/paginas/MenuPrincipal';
import Direccion from './components/paginas/Direccion';
import Login from './components/paginas/Login'

//Comentario

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' component={MenuPrincipal} exact />
            <Route path='/direccion' component={Direccion} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
