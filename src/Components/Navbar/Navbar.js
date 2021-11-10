import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Logout from "../../pages/Logout/Logout";
import Creatucuenta from "../../pages/Creatucuenta/Creatucuenta";

const Navbar = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
    M.AutoInit();
  });

  return (
    <>
      <Router>
        <div>
          <nav>
            <div className="nav-fixed row">
              <div className="col s4">
                <a href="/">
                  <img
                    href="#"
                    src="./images/blog/logo_pie2_oscuro2.png"
                    height={50}
                  ></img>
                  <img
                    href="#"
                    src="./images/blog/logo_letras2.png"
                    height={35}
                  ></img>
                  <a
                    href="#"
                    data-target="mobile-demo"
                    className="sidenav-trigger"
                  >
                    <i className="material-icons">menu</i>
                  </a>
                </a>
              </div>
              <div className="col s4">
                <ul className="right hide-on-med-and-down">
                  <li>
                    <div>
                      <p></p>
                      <div className="center-align">
                        {isAuthenticated ? <Logout /> : <Login />}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      {!isAuthenticated && (
                        // <a href="/Login">Crea tu cuenta</a>
                        <Creatucuenta/>
                      )}
                    </div>
                  </li>
                  {isAuthenticated ? (
                    <>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src={user.picture} className="circle" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="/Edit">
                          Edita Perfil
                        </a>
                      </div>
                    </li>
                    <li>
                    <a href="/Protegemos">Protegemos tus datos</a>
                  </li> 
                  </>                    
                  ) : (
                    <>  <li>
                    <a href="/Protegemos">Protegemos tus datos</a>
                  </li>                                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <a href="sass.html">Crea tu cuenta</a>
            </li>
            <li>
              <a href="#a">Ingresa</a>
            </li>
            <li>
              <a href="collapsible.html">Protegemos tus datos</a>
            </li>
            <li>
              <a href="mobile.html">Mobilesss</a>
            </li>
          </ul>
        </div>
      </Router>
    </>
  );
};
export default Navbar;
