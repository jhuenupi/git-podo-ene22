import React, { Component } from "react";
import image1 from "../../images/Logo/LogoRedondo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <footer className="page-footer teal lighten-1">
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                    <img src={image1} alt="image" width="140px" className="pull-right" />
                  </div>
                  <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                      <li>
                        <a className="grey-text text-lighten-3" href="/Privacidad">
                          Privacidad y Cookies
                        </a>
                      </li>
                      <li>
                        <a
                          className="grey-text text-lighten-3"
                          href="/QuienesSomos"
                        >
                          Quienes Somos
                        </a>
                      </li>
                      {
                      /* 
                      PARA MVP
                      <li>
                        <a className="grey-text text-lighten-3" href="#!">
                          Terminos y condiciones
                        </a>
                      </li>
                      <li>
                        <a className="grey-text text-lighten-3" href="#!">
                          Contacto
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Contacto</h5>
                    <ul>
                      <li>
                      <InstagramIcon ></InstagramIcon> 
                        <a className="grey-text text-lighten-3" target="_blank" href="https://www.instagram.com/_u/podoubica/"> Instagram</a>
                      </li>
                      <li>
                       <FacebookIcon/>
                        <a className="grey-text text-lighten-3" target="_blank" href="https://www.facebook.com/PodoUbica-102305742285915"> Facebook</a>
                      </li>
                      <li>
                          <TwitterIcon/>
                        <a className="grey-text text-lighten-3" href="https://twitter.com/PodoUbica"> Twitter</a>
                      </li>
                      <li>
                          <WhatsAppIcon/>
                        <a className="grey-text text-lighten-3" href="#!"> +569 7273 6355</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                  © 2021 Copyright Podoubica
                  <a className="grey-text text-lighten-4 right" href="#!">
                    RSS
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </>
    );
  }
}
