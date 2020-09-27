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
    margin: 20,
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
          <Typography variant="body2" color="textSecondary" align="justify" style={{marginTop: '10px'}}>
          En nuestros consultorios, nos importa la calidad del servicio que le brindamos a nuestros pacientes en el día a día. Es por ello que hace más de 20 años juramos tratarte a vos y a todos nuestros pacientes con la mejor atención y y el mayor cuidado posible.
          </Typography>
          <Typography variant="body2" color="textSecondary" align="justify" style={{marginTop: '10px'}}>
           Con el objetivo de generar un servicio que ofrece la máxima comodidad, estamos un paso más cerca tuyo gracias a nuestra plataforma. Con esta, permitimos reservas de turnos online, y llevamos registro de tu historial médico.
          </Typography>
          <Typography variant="body2" color="textSecondary" align="justify" style={{marginTop: '10px'}}>
          Además de todo esto, nos gusta mantener a la gente informada con noticias sobre medicina y cosas relacionadas a esta área; invitamos a charlas informativas a aquellas personas que deseen ser futuros medicos y enfermeros.
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