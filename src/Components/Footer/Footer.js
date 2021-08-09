import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer teal lighten-1">
                <div className="container">
                    <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">PodoUbica</h5>
                        <p className="grey-text text-lighten-4">Seguimos tu huella.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">

                        <h5 className="white-text">Links</h5>
                        <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Privacidad y Cookies</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Quienes Somos</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Terminos y condiciones
</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        
                        <h5 className="white-text">Redes Sociales</h5>
                        <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Contacto</a></li>
                        </ul>
                    </div>

                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                    © 2021 Copyright Podoubica
                    <a className="grey-text text-lighten-4 right" href="#!">RSS</a>
                    </div>
                </div>
                </footer>
                
            </div>
        )
    }
}
