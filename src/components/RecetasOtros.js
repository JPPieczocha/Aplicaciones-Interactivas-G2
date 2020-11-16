import React from 'react';
import './../App.css';
import SearchIcon from '@material-ui/icons/Search';

export default function RecetasPacientes (props) {
  return (
    <form>
    <h7 className="campos">Buscar paciente por DNI:</h7>
        <div style={{width:"50%"}}>
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

    <h7 className="campos">Receta:</h7>
        <div style={{width:"50%"}}>
          <input
          type="file"
          autoComplete="new-password"
          className="form-control"
          id="exampleInputPassword1"
          style={{width:"100%", margin:"0px 20px"}}
          placeholder="Cargar archivo"
          required/>
        </div>

    <h7 className="campos">Fecha de Vencimiento:</h7>
        <div style={{width:"50%"}}>
          <input
          type="date"
          autoComplete="new-password"
          className="form-control"
          id="exampleInputPassword1"
          style={{width:"100%", margin:"0px 20px"}}
          placeholder="Ingresar Fecha"
          required/>
        </div>

        <button type="submit" className="btn btn-primary" style={{margin:"20px"}}>Subir</button>
    </form>
    
  );
}