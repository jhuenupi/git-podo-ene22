import React, { Component } from "react";

import { Link } from "react-router-dom";
import M from "materialize-css";
import "./Planes.css";


class Planes extends Component {
  // get a reference to the element after the component has mounted
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <div>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Planes PodoUbica</h1>
            <p className="lead">
              Selecciona el plan a tu conveniencia. Somos emprendedores ayudando
              a emprendedores.
            </p>
          </div>
          <div className="container">
            <div className="card-deck mb-3 text-center">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Plan Gratis</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $0 <small className="text-muted">/ (x 10 días)</small>
                  </h1>
                  <small className="text-muted">Valor Anual $0</small>
                  <ul class="collapsible">
                    <li>
                      <div class="collapsible-header">
                        Acceso ilimitado en PodoUbica.com
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Puedes acceder ilimitadamente a la plataforma de
                          PodoUbica.com y navegar en otros perfiles y página
                          web.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        Perfil con información básica
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Muestra: nombre, foto de perfil y profesión (N° de
                          Rol), cuenta de correo y comuna seleccionada de
                          atención.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        Una comuna para publicar
                      </div>
                      <div class="collapsible-body">
                        <span>
                          De acuerdo a la región donde te encuentres, puedes
                          seleccionar una comuna para publicar tu perfil y así
                          promocionar tu lugar de preferencia para atención
                          podológica.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        ¿Cómo te contactarán?
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Los pacientes interesados en tu perfil podrán
                          contactarte vía email.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        Soporte técnico vía e-mail
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Puedes contactarnos vía email ante cualquier consulta.
                          Te responderemos por la misma vía.
                        </span>
                      </div>
                    </li>
                  </ul>
                  {/* <button type="button" onClick={handleRoute} className="btn btn-lg btn-block btn-outline-primary">Registrate Gratis</button> */}

                  <Link to="/registrogratis" className="btn btn-primary">
                    EMPEZAR
                  </Link>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Plan Básico</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $9.990 <small className="text-muted">/ mes</small>
                  </h1>
                  <small className="text-muted">Valor Anual $119.880</small>
                  <a
                    class="waves-effect waves-light btn modal-trigger"
                    href="#modal1"
                  >
                    Ver Promociones
                  </a>
                  <div id="modal1" className="modal">
                    <div className="modal-content">
                      <h4>Promociones Plan Básico</h4>
                      <h6>(*) Valor referencial $9.990</h6>
                      <p>Con nuestras promociones puedes seleccionar el plan que más te acomode</p>
                      <table class="highlight">
                        <thead>
                          <tr>
                            <th data-field="id">Meses</th>
                            <th data-field="name">(%) Dcto.</th>
                            <th data-field="name">Valor Mes</th>
                            
                            <th data-field="price">Promoción</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Plan 1 mes</td>
                            <td>20%</td>
                            <td>$7.992 c/Mes</td>
                            <td>$7.992</td>
                            
                          </tr>
                          <tr>
                            <td>Plan 6 meses</td>
                            <td>30%</td>
                            <td>$6.993 c/Mes</td>                            
                            <td>$41.958</td>
                          </tr>
                          <tr>
                            <td>Plan 12 meses</td>
                            <td>50%</td>
                            <td>$4.995 c/Mes</td>                            
                            <td>$59.940</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <a
                        href="#!"
                        className="modal-close waves-effect waves-green btn-flat"
                      >
                        Volver
                      </a>
                    </div>
                  </div>

                  <ul class="collapsible">
                    <li>
                      <div class="collapsible-header">
                        Acceso ilimitado en PodoUbica.com
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Puedes acceder ilimitadamente a la plataforma de
                          PodoUbica.com y navegar en otros perfiles y página
                          web.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        Perfil con información parcial
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Muestra: nombre, profesión (N° de Rol), foto de
                          perfil, teléfono, e-mail, tipos de atención que
                          realizas y comuna de atención.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        Selección de una comuna
                      </div>
                      <div class="collapsible-body">
                        <span>
                          De acuerdo a la región donde te encuentres, puedes
                          seleccionar una comuna para publicar tu perfil y así
                          promocionar tu lugar de preferencia para atención
                          podológica.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        ¿Cómo te contactarán?
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Te podrán contactar vía e-mail, telefónica o bien
                          visitar en lugar de atención que publicaste. De
                          acuerdo a lo que has seleccionado en tu perfil.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        Recibe calificaciones
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Tus pacientes podrán dejar comentarios y opiniones
                          respecto a tu atención, así aumentas tu nivel de
                          atención.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        Soporte técnico vía e-mail
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Puedes contactarnos vía email ante cualquier consulta.
                          Te responderemos por la misma vía.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <Link to="/PlanBasico" className="btn btn-primary">
                    EMPEZAR
                  </Link>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Plan Plus</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $11.990 <small className="text-muted">/ Mes</small>
                  </h1>
                  <small className="text-muted">Valor Anual $143.880</small>
                  <a
                    class="waves-effect waves-light btn modal-trigger"
                    href="#modal2"
                  >
                    Ver Promociones
                  </a>
                  <div id="modal2" className="modal">
                    <div className="modal-content">
                      <h4>Promociones Plan Plus</h4>
                      <h6>(*) Valor referencial $11.990</h6>
                      <p>Con nuestras promociones puedes seleccionar el plan que más te acomode</p>
                      <table class="highlight">
                        <thead>
                          <tr>
                            <th data-field="id">Meses</th>
                            <th data-field="name">(%) Dcto.</th>
                            <th data-field="name">Valor Mes</th>                            
                            <th data-field="price">Promoción</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Plan 1 mes</td>
                            <td>20%</td>
                            <td>$9.592 c/Mes</td>                            
                            <td>$9.592</td>
                          </tr>
                          <tr>
                            <td>Plan 6 meses</td>
                            <td>30%</td>
                            <td>$8.393 c/Mes</td>                            
                            <td>$50.358</td>
                          </tr>
                          <tr>
                            <td>Plan 12 meses</td>
                            <td>50%</td>
                            <td>$5.995 c/Mes</td>                            
                            <td>$71.940</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <a
                        href="#!"
                        className="modal-close waves-effect waves-green btn-flat"
                      >
                        Volver
                      </a>
                    </div>
                  </div>                  
                  <ul class="collapsible">
                    <li>
                      <div class="collapsible-header">
                        Acceso ilimitado en PodoUbica.com
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Puedes acceder ilimitadamente a la plataforma de
                          PodoUbica.com y navegar en otros perfiles y página
                          web.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        Perfil c/información completa
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Muestra toda la información que los pacientes quieren
                          saber: nombre, profesión (N° de Rol), foto de perfil,
                          RRSS, teléfono, e-mail, tipos de atención que
                          realizas, experiencia laboral, horarios de atención y
                          comunas donde has decidido tender. Además, promovemos
                          tu perfil en PodoUbica.com y sus RRSS.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        + Ilimitadas  comunas
                      </div>
                      <div class="collapsible-body">
                        <span>
                          De acuerdo a la región donde te encuentres, puedes
                          seleccionar todas las comunas de tu preferencia para
                          publicar tu perfil, y así promocionar tu lugar de
                          preferencia para atención podológica.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        ¿Cómo te contactarán?
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Te podrán contactar vía e-mail, telefónica o bien
                          visitar en lugar de atención que publicaste. De
                          acuerdo a lo que has seleccionado en tu perfil.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        Recibe calificaciones
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Tus pacientes podrán dejar comentarios y opiniones
                          respecto a tu atención, así aumentas tu nivel de
                          atención.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                        Soporte técnico vía e-mail
                      </div>
                      <div class="collapsible-body">
                        <span>
                          Puedes contactarnos vía email ante cualquier consulta.
                          Te responderemos por la misma vía.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <Link to="/PlanPlus" className="btn btn-primary">
                    EMPEZAR
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Planes;
