import React from 'react'

//Componentes
import NavBar from './../components/NavBar.js'
import AutoGrid from './../components/HeaderGrid.js'
import Footer from "./../components/Footer"

//Iconos
import SearchIcon from '@material-ui/icons/Search';

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
                    <div>
                    <h7 className="campos">Historial Médico:
                    <div className="row" style={{width:"70%"}} align="center">
                    <div className="col" align="center">
                    <input
                      type="text"
                      className="form-control"
                      style={{margin:"20px 0px"}}
                      id="nombre"
                      value={"Clara"}
                      disabled
                    /></div>
                     <div className="col" align="center">
                    <input
                      type="text"
                      className="form-control"
                      style={{margin:"20px 0px"}}
                      id="nombre"
                      value={"Gomez"}
                      disabled
                    />
                    </div>
                    </div>
                        <textarea className="form-control" disabled placeholder="Cabecera..." style={{width:'100%', margin:"10px 0px"}} rows="5">
                        </textarea>
                        <textarea className="form-control" disabled placeholder="Detalles..." style={{width:'100%', margin:"10px 0px"}} rows="10">
                        </textarea>
                    </h7>
                    </div>
                </form>
            </main>
            <Footer/>
        </div>
    )
}