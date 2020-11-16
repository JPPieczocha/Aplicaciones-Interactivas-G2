import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './../App.css';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';

//Componentes
import Header from './../components/HeaderGrid.js'
import Footer from "./../components/Footer"
import NavBar from './../components/NavBar'

export default function Configuración(props) {

  const [value, setValue] = React.useState('Paciente');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
      <div className="App">
        <header className="App-barraTitulo">
          <Header sesion={props.sesion} cambio={props.cambiar}/>
        </header>
        <div className="App-header">
          <NavBar align="center"/>
        </div>
        <div className='App-principal-variante'>
        <h1 className="titulos">ABM Usuarios</h1>
          <div style={{width:"50%"}}>
              <form autoComplete="off">

                    <h7 className="campos">Buscar usuario por DNI:</h7>
                    <div>
                    <input
                    type="text"
                    autoComplete="new-password"
                    className="form-control"
                    style={{margin:"0px 20px"}}
                    id="exampleInputPassword1"
                    placeholder="Ingresar Numero de DNI"
                    required
                    />
                    <button type="submit" className="btn btn-primary" style={{width:"100%", margin:"0px 20px"}}><SearchIcon/></button>
                    </div>
                    

                    <h7 className="campos">Permisos:</h7>

                      <RadioGroup style={{margin:"20px"}} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="Paciente" control={<Radio />} label="Paciente" />
                        <FormControlLabel value="Medico" control={<Radio />} label="Médico/a" />
                        <FormControlLabel value="Secretaria" control={<Radio />} label="Secretario/a" />
                        <FormControlLabel value="Administrador" control={<Radio />} label="Administrador/a" />
                      </RadioGroup>
                    
              </form>
            </div>
            <Link to={'/'}>
              <button type="submit" className="btn btn-primary" style={{margin:"20px 20px"}}>Guardar Cambios</button>
            </Link>
          </div>
          <Footer/>
        </div>
    );
  }