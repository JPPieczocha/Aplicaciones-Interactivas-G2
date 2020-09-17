import React from "react";
import "./../App.css";
import {Button, ButtonGroup} from '@material-ui/core';

//Iconos
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Footer() {
  return (
    <div className="main-footer">
        <div className="container" align="center">
                <ButtonGroup align="center">
                <Button color="primary">
                    <FacebookIcon />
                </Button>
                <Button color="primary">
                    <TwitterIcon />
                </Button>
                <Button color="primary">
                    <InstagramIcon />
                </Button>
                <Button color="primary">
                    <YouTubeIcon />
                </Button>
                <Button color="primary">
                    <LinkedInIcon />
                    </Button>
                <Button color="primary">
                    <WhatsAppIcon />
                </Button>
                </ButtonGroup>
            <hr />
            <div className="row">
            <p className="col-sm"><CopyrightIcon/> {new Date().getFullYear()} Todos los derechos reservados <br/><a
          className="App-link"
          href="https://www.youtube.com/watch?v=fC7oUOUEEi4&ab_channel=StackMan"
          target="_blank"
          rel="noopener noreferrer">FAQ</a> <br/>Términos de servicio
            </p>
            </div>
         </div>
    </div>
  );
}

export default Footer;
