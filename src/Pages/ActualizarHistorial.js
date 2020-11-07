import React from 'react'

//Componentes
import NavBar from '../components/NavBar.js'
import HeaderGrid from '../components/HeaderGrid.js'
import Footer from "../components/Footer"

//Iconos
import SearchIcon from '@material-ui/icons/Search';
import Upload from '@material-ui/icons/Publish';

export default function ActualizarHistorial(props) {
    return (
        <div className="App">
            <header className="App-barraTitulo">
                <HeaderGrid sesion={props.sesion} cambio={props.cambiar}/>
            </header>
            <navbar className="App-header">
                <NavBar align="center"/>
            </navbar>
            <main className="App-principal-variante">
            <h1 className="titulos">Actualizar Historial Clínico</h1>
                <form>
                    <form>
                    <h7 className="campos">Buscar paciente por DNI:   
                            <input style={{width: "50%"}} type="number" required/>
                            <button type="submit" style={{width: "50%"}} className="btn btn-primary"><SearchIcon/></button>
                        </h7>
                    </form>
                    <br/>
                    <h7 className="campos">Historial Médico:
                    <input
                        style={{width: "50%"}}
                        type="file"
                        autoComplete="new-password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Cargar archivo"
                        required/>
                        </h7>
                    <button style={{margin: "20px"}} type='submit' className="btn btn-primary"><Upload/></button>
                </form>

            </main>
            <Footer/>
        </div>
    )
}

