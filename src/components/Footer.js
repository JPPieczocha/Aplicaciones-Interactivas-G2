import React from "react";
import "./../App.css";

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
        <div className="container">
            <div className="row">
                <div className="col">
                    <FacebookIcon />
                </div>
                <div className="col">
                    <TwitterIcon />
                </div>
                <div className="col">
                    <InstagramIcon />
                </div>
                <div className="col">
                    <YouTubeIcon />
                </div>
                <div className="col">
                    <LinkedInIcon />
                </div>
                <div className="col">
                    <WhatsAppIcon />
                </div>
            </div>
            <hr />
            <div className="row">
            <p className="col-sm"><CopyrightIcon/> {new Date().getFullYear()} Todos los derechos reservados <br/>Términos de servicio <br/>FAQ
            </p>
            </div>
         </div>
    </div>
  );
}

export default Footer;
