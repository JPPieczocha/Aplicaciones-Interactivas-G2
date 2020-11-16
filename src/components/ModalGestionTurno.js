import React, { Component } from 'react'
import {FormControl, InputLabel, Select, MenuItem, FormHelperText, TextField, Grid} from '@material-ui/core'

export default class ModalGestionTurno extends Component {

    constructor(props){
        super(props)

        this.state = {
            estudio: '',
            fecha: '',
            cargado: false,
            horario: '',
        }

        this.handleEstudio = this.handleEstudio.bind(this)
        this.handleFecha = this.handleFecha.bind(this)
        this.handleCarga = this.handleCarga.bind(this)

    }

    handleEstudio(e) {
        this.setState({
            estudio: e.target.value,
            cargado: false,
        })
    }

    handleFecha(e) {
        if (e>=Date.now()){
        this.setState({
            fecha: e.target.value,
            cargado: false,
        })
    }
    }

    handleCarga(){
        if (this.state.estudio !== '' && this.state.fecha !== '' ){
            this.setState({
                cargado: true
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <Grid container className="align-items-center">
                        <Grid item xs={12} sm={4}>
                            <FormControl>
                                <InputLabel id="demo-simple-select-helper-label">Estudio</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={this.state.estudio}
                                    onChange={this.handleEstudio}
                                    fullWidth
                                    >
                                        <MenuItem value=""><em></em></MenuItem>
                                        <MenuItem value="Análisis de Sangre">Análisis de Sangre</MenuItem>
                                        <MenuItem value="Rayos X">Rayos X</MenuItem>
                                        <MenuItem value="Pediatría">Pediatría</MenuItem>
                                </Select>
                                <FormHelperText>Cargue el estudio que desea realizarse</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <FormControl>
                            <TextField
                                id="datetime-local"
                                label="Fecha del turno"
                                type="date"
                                defaultValue={Date.now()}
                                onChange={this.handleFecha}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <FormHelperText>Cargue una fecha para realizar su estudio</FormHelperText>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <FormControl align="center">
                            <button color="primary" style={{margin:"4px"}} onClick={this.handleCarga}>Buscar horarios</button>
                        </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}
