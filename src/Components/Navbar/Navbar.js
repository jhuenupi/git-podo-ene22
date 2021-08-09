import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    M.AutoInit();
  });

  return (
    <>
    <Router>
      <div>
          
          <nav>
            <div className="nav-wrapper row">
              <div className="col s4">
                <a href="/">
                  <img href="#" src="./images/blog/logo_pie2_oscuro2.png" height={50} ></img>
                  <img href="#" src="./images/blog/logo_letras2.png" height={35}></img>
                  <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </a>
              </div>
              <div className="col s4">
                <ul className="right hide-on-med-and-down">
                  <li>
                  <a href="/Creatucuenta">Crea tu cuenta</a>
                  </li>
                  <li><a href="/about">Ingresa</a></li>
                  <li><a href="/protegemos">Protegemos tus datos</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            <li><a href="sass.html">Crea tu cuenta</a></li>
            <li><a href="badges.html">Ingresa</a></li>
            <li><a href="collapsible.html">Protegemos tus datos</a></li>
            <li><a href="mobile.html">Mobilesss</a></li>
          </ul>
      </div>
      </Router> 
  </>
  )
}
export default Navbar;