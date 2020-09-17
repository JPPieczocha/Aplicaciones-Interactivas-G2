import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';

import img1 from './../assets/img/img1.jpg';
import img2 from './../assets/img/img2.jpg';
import img3 from './../assets/img/img3.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 650,
      minHeight: '2hv',
      flexGrow: 0,
      boxShadow: '0px 2px 10px black',
    },
    leyenda:{
      color: '#FFFFFF',
      backgroundColor: 'none',
    }
  }));

export default function Slider(){
    const classes = useStyles();
    return (
        <div >
            <Carousel className={classes.root}>
                <div>
                    <img src={img1} alt=""/>
                    <h5 className={classes.leyenda}>Nuevo equipo para cuidarte mejor</h5>
                </div>
                <div>
                    <img src={img2} alt=""/>
                    <h5 className={classes.leyenda}>Resultados de análisis que podrian dar indicios de una posible cura</h5>
                </div>
                <div>
                    <img src={img3} alt=""/>
                    <h5 className={classes.leyenda}>Como cuidarte y consejos de prevención</h5>
                </div>
            </Carousel>
        </div>
    );
}