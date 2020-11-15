import React from 'react'

import NavBar from './../components/NavBar.js'
import AutoGrid from './../components/HeaderGrid.js'
import Footer from "./../components/Footer"

export default function IngresarNovedades (props) {
    return (
        <div className="App">
            <header className="App-barraTitulo">
                <AutoGrid sesion={props.sesion} cambio={props.cambiar}/>
            </header>
            <navbar className="App-header">
                <NavBar align="center"/>
            </navbar>
            <main className="App-principal-variante">
                <h1 className="titulos">Ingresar Novedades</h1>
                <div>
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
                    <div>
                        <h7 className="campos">Novedad:</h7>
                        <textarea style={{width:'100%'}} rows="10">
                        </textarea>
                    </div>
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

