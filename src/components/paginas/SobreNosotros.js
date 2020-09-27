import React from 'react';
import './../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img4 from './../../assets/img/img4.jpg';
import Container from '@material-ui/core/Container';

//Componentes
import NavBar from './../NavBar.js'
import HeaderGrid from '../HeaderGrid.js'
import Footer from "./../Footer"

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    padding: "15px",
    margin: "20px",
  },
  media: {
    height: 140,
  }
});

export default function SobreNosotros() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-barraTitulo">
        <HeaderGrid/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal-variante" >
        <Container align="center">
        <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom className="Tarjeta" variant="h5" component="h2" >
            ¿Quienes somos?
          </Typography>
          <CardMedia
          className={classes.media}
          image={img4}
        />
          <Typography variant="body2" color="textSecondary" component="p" align="justify">
          En nuestros consultorios, nos importa la calidad de nuestro servicio hacia los pacientes. Con esta plataforma, estamos un paso más cerca tuyo que nunca. Mantenemos a la gente informada con noticias sobre medicina, asi como invitaciones a charlas informativas para futuros medicos y enfermeros.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
      </div>
      <Footer/>
    </div>
  );
}