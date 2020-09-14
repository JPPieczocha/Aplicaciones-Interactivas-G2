import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

import img1 from './../assets/img/img1.jpg';
import img2 from './../assets/img/img2.jpg';
import img3 from './../assets/img/img3.jpg';

export default function Slider(){

    return (
        <div className="Slider">
            <Carousel>
                <div>
                    <img src={img1}/>
                    <h2>Sample Caption</h2>
                </div>

                <div>
                    <img src={img2}/>
                    <h2>Sample Caption</h2>
                </div>

                <div>
                    <img src={img3}/>
                    <h2>Sample Caption</h2>
                </div>
            </Carousel>
        </div>
    );
}