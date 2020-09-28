import React from 'react';
import './../App.css';
import SearchIcon from '@material-ui/icons/Search';

export default function RecetasPacientes (props) {
  return (
    <form>
    <h7 className="campos">Buscar paciente por DNI:   
            <input type="number" required/>
            <button type="submit" className="btn btn-primary"><SearchIcon/></button>
        </h7>

        <h7 className="campos">Receta:
    <input
        type="file"
        autoComplete="new-password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Cargar archivo"
        required/>
        </h7>

        <h7 className="campos">Fecha de Vencimiento:
    <input
        type="date"
        autoComplete="new-password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Ingresar Fecha"
        required/>
        </h7>

        <button type="submit" className="btn btn-primary" style={{marginLeft:"20px"}}>Subir</button>
    </form>
    
  );
}