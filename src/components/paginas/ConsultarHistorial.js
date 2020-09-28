import React from 'react'

//Componentes
import NavBar from './../NavBar.js'
import AutoGrid from './../HeaderGrid.js'
import Footer from "./../Footer"

//Iconos
import SearchIcon from '@material-ui/icons/Search';
import Upload from '@material-ui/icons/Publish';

export default function ActualizarHistorial(props) {
    return (
        <div className="App">
            <header className="App-barraTitulo">
                <AutoGrid sesion={props.sesion} cambio={props.cambiar}/>
            </header>
            <navbar className="App-header">
                <NavBar align="center"/>
            </navbar>
            <main className="App-principal-variante">
            <h1 className="titulos">Consultar Historial Clínico</h1>
                <form>
                    <h7 className="campos">Buscar paciente por DNI:    
                        <input type="number"  style={{width: "50%"}} required/>
                        <button type="submit" style={{width: "50%"}} className="btn btn-primary"><SearchIcon/></button>
                    </h7>
                </form>
                <br/>
                <h7 className="campos" >Historial Médico:
                    <button type='download' style={{width: "50%"}} className="btn btn-primary"><Upload/></button>
                </h7>
            </main>
            <Footer/>
        </div>
    )
}