import React, { Component } from 'react'
import {FormControl, InputLabel, Select, MenuItem, FormHelperText, TextField, Button, Grid} from '@material-ui/core'

export default class ModalGestionTurno extends Component {

    constructor(props){
        super(props)

        this.state = {
            estudio: '',
            fecha: '',
            cargado: false,
            horario: ''
        }

        this.handleEstudio = this.handleEstudio.bind(this)
        this.handleFecha = this.handleFecha.bind(this)
        this.handleCarga = this.handleCarga.bind(this)

    }

    handleEstudio(e) {
        this.setState({
            estudio: e.target.value,
            cargado: false,
            horario: ''
        })
    }

    handleFecha(e) {
        this.setState({
            fecha: e.target.value,
            cargado: false,
            horario: ''
        })
    }

    handleCarga(){
        if (this.state.estudio !== '' && this.state.fecha !== ''){
            this.setState({
                cargado: true
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <Grid container>
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
                            <TextField
                                id="datetime-local"
                                label="Next appointment"
                                type="date"
                                defaultValue={Date.now()}
                                onChange={this.handleFecha}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button onClick={this.handleCarga}>Buscar horarios</Button>
                        </Grid>
                    </Grid>
                    

                    <FormControl disabled={this.state.cargado}>
                        <InputLabel id="demo-simple-select-helper-label">Estudio</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={this.state.cargado}
                            onChange={this.handleEstudio}
                            fullWidth
                            >
                                <MenuItem value=""><em></em></MenuItem>
                                <MenuItem value="10:30">10:30 A.M.</MenuItem>
                                <MenuItem value="11:00">11:00 A.M.</MenuItem>
                                <MenuItem value="11:30">11:30</MenuItem>
                        </Select>
                        <FormHelperText>Cargue el estudio que desea realizarse</FormHelperText>
                    </FormControl>
                </form>
            </div>
        )
    }
}
