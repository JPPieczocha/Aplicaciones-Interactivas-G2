import React, { Component } from 'react'

//Componentes
import NavBar from './../NavBar.js'
import AutoGrid from './../Grid.js'
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
                <main className="App-principal">
                    <br/>
                    <form>
                        <form>
                            <h7>Buscar paciente por DNI:   
                                <input type="number" required/>
                                <span>          </span>
                                <button type="submit" className="btn btn-primary"><SearchIcon/></button>
                            </h7>
                        </form>
                        <br/>
                        <br/>
                        <h7>Historial Médico:</h7>
                        <input
                            type="file"
                            autoComplete="new-password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Cargar archivo"
                            required/>
                        <br/>
                        <br/>
                        <button type='submit' className="btn btn-primary"><Upload/></button>
                        <br/>
                        <br/>
                    </form>

                </main>
                <Footer/>
            </div>
        )
    }
}
