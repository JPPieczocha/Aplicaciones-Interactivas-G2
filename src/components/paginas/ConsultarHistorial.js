import React, { Component } from 'react'

//Componentes
import NavBar from './../NavBar.js'
import AutoGrid from './../HeaderGrid.js'
import Footer from "./../Footer"

//Iconos
import SearchIcon from '@material-ui/icons/Search';
import Upload from '@material-ui/icons/Publish';

export default class ActualizarHistorial extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-barraTitulo">
                    <AutoGrid/>
                </header>
                <navbar className="App-header">
                    <NavBar align="center"/>
                </navbar>
                <main className="App-principal-variante">
                <h1 className="titulos">Consultar Historial Clínico</h1>
                    <br/>
                    <form>
                        <h7 className="campos">Buscar paciente por DNI:    
                            <input type="number"  style={{width: "50%"}} required/>
                            <button type="submit" style={{width: "50%"}} className="btn btn-primary"><SearchIcon/></button>
                        </h7>
                    </form>
                    <br/>
                    <br/>
                    <h7 className="campos" >Historial Médico:
                        <button type='download' style={{width: "50%"}} className="btn btn-primary"><Upload/></button>
                    </h7>
                    <br/>
                    <br/>

                </main>
                <Footer/>
            </div>
        )
    }
}