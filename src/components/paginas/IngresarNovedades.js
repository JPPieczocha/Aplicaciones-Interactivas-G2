import React, { Component } from 'react'

import NavBar from './../NavBar.js'
import AutoGrid from './../HeaderGrid.js'
import Footer from "./../Footer"

export default class IngresarNovedades extends Component {
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
                    <h1 className="titulos">Ingresar Novedades</h1>
                    <div fixed>
                        <form autoComplete="off">
                        <div>
                            <h7 className="campos">Título:</h7>
                            <input
                            type="text"
                            className="form-control"
                            id="tituloNovedad1"
                            aria-describedby="emailHelp"
                            placeholder="Ingresar título:"
                            required
                            />
                        </div>
                        <br/>
                        <div>
                            <h7 className="campos">Novedad:</h7>
                            <br/>
                            <textarea rows="10" cols="100">
                                
                            </textarea>
                        </div>
                        <br/>
                        <div>
                            <h7 className="campos">Imagen:</h7>
                            <input
                            type="file"
                            autoComplete="new-password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Cargar archivo"
                            required
                            />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                        </form>
                    </div>

                </main>
                <Footer/>
            </div>
        )
    }
}
