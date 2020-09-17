import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';

import img1 from './../assets/img/img1.jpg';
import img2 from './../assets/img/img2.jpg';
import img3 from './../assets/img/img3.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400, 
      flexGrow: 0,
    },
    header: {
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 205,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
    },
  }));

export default function Slider(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Carousel>
                <div>
                    <img src={img1} alt=""/>
                    <h2 justify="center">Meme 1</h2>
                </div>
                <div>
                    <img src={img2} alt=""/>
                    <h2 justify="center">Meme 2</h2>
                </div>
                <div>
                    <img src={img3} alt=""/>
                    <h2 justify="center">Meme 3</h2>
                </div>
            </Carousel>
        </div>
    );
}