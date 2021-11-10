import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Rut from "../../Components/helpers/Rut";
import Comunas from "../../pages/Comunas/Comunas";
import Regiones from "../Regiones/Regiones";
import Comuna from "../Comuna/Comuna";
import M from "materialize-css";
import Modal from "react-modal";
import AddServicio from "../AddServicio/AddServicio";
import NumberFormat from "react-number-format";
import ServicioList from "../../Components/PodoServicios/podoserviciolist"

export default function EditPerfil() {
  const [rut, setRut] = useState("");
  const [rutValido, setRutValido] = useState(false);
  const { user } = useAuth0();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".timepicker");
    var elemsM = document.querySelectorAll(".modal");

    var instances = M.Timepicker.init(elems, {});
    var instanceM = M.Modal.getInstance(elemsM, {});
    instanceM.open();
  });
  return (
    <>
      <div className="container">
        <div className="row flex-lg-nowrap">
          <div className="col">
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="e-profile">
                      <div className="row">
                        <div className="col-12 col-sm-auto mb-3">
                          <div className="mx-auto" style={{ width: 140 }}>
                            <div
                              className="d-flex justify-content-center align-items-center rounded"
                              style={{
                                height: 140,
                                backgroundColor: "rgb(233, 236, 239)",
                              }}
                            >
                              <span
                                style={{
                                  color: "rgb(166, 168, 170)",
                                  font: "bold 8pt Arial",
                                }}
                              >
                                140x140
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                              {user.name}
                            </h4>
                            <p className="mb-0">{user.email}</p>
                            <div className="text-muted">
                              {/* <small>Last seen 2 hours ago</small> */}
                            </div>
                            <div className="mt-2">
                              <button className="btn btn-primary" type="button">
                                <i className="fa fa-fw fa-camera" />
                                <span></span>
                              </button>
                            </div>
                          </div>
                          <div className="text-center text-sm-right">
                            <span className="badge badge-secondary">
                              administrator
                            </span>
                            <div className="text-muted">
                              <small>{}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a href className="active nav-link">
                            Datos Básicos
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content pt-3">
                        <div className="tab-pane active">
                          <form className="form" noValidate>
                            <div className="row">
                              <div className="col">
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <p>Nombre Completo</p>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder=""
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <p>Rut</p>
                                      <Rut
                                        value={rut}
                                        onChange={(e) => setRut(e.target.value)}
                                        onValid={setRutValido}
                                      >
                                        <input
                                          type="text"
                                          name="rut"
                                          placeholder="Rut"
                                          required
                                        ></input>
                                      </Rut>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <p>Email</p>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        placeholder="user@example.com"
                                        value={user.email}
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <p>Teléfono movil</p>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="movil"
                                        placeholder="+569 1234 5678"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col mb-3">
                                    <div className="form-group">
                                      <p>Acerca de mi</p>
                                      <textarea
                                        className="form-control"
                                        rows={5}
                                        placeholder="My Bio"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <p>
                                      <b>Redes Sociales</b>
                                    </p>
                                    <p>
                                      {" "}
                                      Utilice esta sección para promocionar sus
                                      redes sociales
                                    </p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <p>Facebook</p>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        placeholder="user@example.com"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <p>Instagram</p>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        placeholder="user@example.com"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <p>LinkedIn</p>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        placeholder="user@example.com"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <p>Twitter</p>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        placeholder="user@example.com"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p>
                                  <b>Rol Título/Certificados</b>
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <p>Rol de Título</p>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="nrol"
                                    placeholder=""
                                    defaultValue=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p>
                                  <b>Agrega tu titulo profesional</b>
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <div>
                                    <div className="btn">
                                      <input type="file" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group">
                                  <div>
                                    <div className="file-path-wrapper">
                                      <input
                                        className="file-path validate"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p>
                                  <b>Otros conocimientos</b>
                                </p>
                                <p>
                                  Te recomendamos subir los certificados que
                                  acrediten tus conocimientos.
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <div>
                                    <div className="btn">
                                      <input type="file" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group">
                                  <div>
                                    <div className="file-path-wrapper">
                                      <input
                                        className="file-path validate"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <div>
                                    <div className="file-path-wrapper">
                                      <span>
                                        <b>Link para redes sociales:</b>
                                      </span>
                                      <input
                                        className="file-path validate"
                                        type="text"
                                        value={
                                          "http://www.podoubica.cl/" + user.name
                                        }
                                      />
                                      <span>
                                        Comparte tu perfil copiando este link en
                                        las diferentes redes sociales.
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <div className="form-group">
                                  <span>
                                    <b>Mi experiencia laboral</b>
                                  </span>
                                  <textarea
                                    className="form-control"
                                    rows={5}
                                    placeholder="Mi experiencia laboral..."
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <div className="form-group">
                                  <span>
                                    <b>¿Cual es tu forma de atención?</b>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="row ">
                              <div>
                                <p>
                                  <label>
                                    <input
                                      name="group1"
                                      type="radio"
                                      defaultChecked
                                    />
                                    <span>En Domicilio del paciente</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input name="group1" type="radio" />
                                    <span>En Mi Domicilio</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input
                                      className="with-gap"
                                      name="group1"
                                      type="radio"
                                    />
                                    <span>Ambas</span>
                                  </label>
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <span>
                                    <b>Atención En Mi Domicilio</b>
                                  </span>
                                  <div class="input-field">
                                    <input
                                      placeholder="Placeholder"
                                      id="mi_domicilio"
                                      type="text"
                                      class="validate"
                                    />
                                    <label for="mi_domicilio">
                                      Mi Domicilio de atención
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>
                                  <b>Atiendo en la comuna de:</b>
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <p>Región</p>
                                  {<Regiones />}
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group">
                                  <label> Comuna </label>
                                  <div class="input-field">
                                    <Comuna />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>
                                  <b>Atención en varias Comuna del paciente</b>{" "}
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <div className="form-group">
                                  <p>Regiones</p>
                                  {<Regiones />}
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <div className="form-group">
                                  <p>Multiples Comunas</p>
                                  {<Comunas />}
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-sm-5 offset-sm-1 mb-3"></div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>
                                  <b>Horarios de Atención</b>
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <label>
                                  <input type="checkbox" />
                                  <span>Lunes</span>
                                </label>
                              </div>
                              <div className="col mb-3">
                                <input
                                  type="time"
                                  id="inputMDEx1"
                                  value="08:00"
                                  enabled
                                />
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <label>
                                  <input type="checkbox" />
                                  <span>Martes</span>
                                </label>
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <label>
                                  <input type="checkbox" />
                                  <span>Miercoles</span>
                                </label>
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <label>
                                  <input type="checkbox" />
                                  <span>Jueves</span>
                                </label>
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <label>
                                  <input type="checkbox" />
                                  <span>Viernes</span>
                                </label>
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <label>
                                  <input type="checkbox" />
                                  <span>Sábado</span>
                                </label>
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <label>
                                  <input type="checkbox" />
                                  <span>Domingo</span>
                                </label>
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                              <div className="col mb-3">
                                <input type="time" id="inputMDEx1" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <span>¿Atiende Urgencias? </span>
                                <label>
                                  <input type="checkbox" />
                                  <span>SI</span>
                                </label>
                                <div class="input-field">
                                  <textarea
                                    id="textarea1"
                                    class="materialize-textarea"
                                  ></textarea>

                                  <label for="mi_domicilio">
                                    Observaciones para urgencias
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>
                                  <b>Servicios Podológicos</b> (max. 15)
                                </span>
                              </div>
                              <div>
                                <div className="row">
                                  <div className="col">
                                    <a
                                      classname="btn-floating btn-large waves-effect waves-light red"
                                      href="##"
                                      onClick={() => setModalIsOpen(true)}
                                    >
                                      <i className="material-icons">add</i>
                                    </a>
                                    <Modal
                                      isOpen={modalIsOpen}
                                      style={{
                                        content: {
                                          left: "20%",
                                          right: "20%",
                                          top: "10%",
                                          bottom: "10%",
                                        },
                                      }}
                                    >
                                      <h4>Agregar Servicio</h4>

                                      <div className="row">
                                        <div className="input-field col s6">
                                          <input
                                            id="first_name_service"
                                            type="text"
                                            className="validate"
                                          />
                                          <label htmlFor="first_name_service">
                                            Nombre del Servicio
                                          </label>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="input-field col s6">
                                          <NumberFormat
                                            thousandSeparator="."
                                            decimalSeparator=","
                                            prefix="$"
                                          />
                                          <label htmlFor="last_name">
                                            Precio de Referencia
                                          </label>
                                        </div>
                                        <div className="input-field col s6"></div>
                                      </div>
                                      <div className="row">
                                        <div class="input-field col s12">
                                          <textarea
                                            id="textarea1"
                                            class="materialize-textarea"
                                          ></textarea>
                                          <label for="textarea1">
                                            Detalle de Servicio
                                          </label>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="input-field col s6 c3">
                                          <button
                                            class="btn waves-effect waves-light"
                                            onClick={() =>
                                              setModalIsOpen(false)
                                            }
                                          >
                                            Cancelar
                                            <i class="material-icons right">
                                              cancel
                                            </i>
                                          </button>
                                        </div>
                                        <div className="input-field col s6 c3">
                                          <button
                                            class="btn waves-effect waves-light"
                                            onClick={() =>
                                              setModalIsOpen(false)
                                            }
                                          >
                                            Guardar
                                            <i class="material-icons right">
                                              saved
                                            </i>
                                          </button>
                                        </div>
                                      </div>
                                    </Modal>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="row">
                                  <div className="col">
                                    {/* <ServicioList/> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>
                                  <b>Paciente que atiende:</b>
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p>
                                  <label>
                                    <input type="checkbox" />
                                    <span>Niño</span>
                                  </label>
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p>
                                  <label>
                                    <input type="checkbox" />
                                    <span>Jovenes</span>
                                  </label>
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p>
                                  <label>
                                    <input type="checkbox" />
                                    <span>Adultos</span>
                                  </label>
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p>
                                  <label>
                                    <input type="checkbox" />
                                    <span>Adulto Mayor</span>
                                  </label>
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p>
                                  <label>
                                    <input type="checkbox" />
                                    <span>Diabetico</span>
                                  </label>
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>
                                  <b>Promociones</b>
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s6">
                                <span>¿Cómo se llama tu promoción?</span>
                                <input
                                  id="first_name"
                                  type="text"
                                  className="validate"
                                  placeholder="Ejemplo. Invita a un referido"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div class="input-field">
                                  <span>Precio promoción (p/persona)</span>
                                  <NumberFormat
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    prefix="$"
                                  />
                                </div>
                              </div>
                              <div className="col"></div>

                              <div className="col"></div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div class="input-field">
                                  <span>¿En qué consiste tu promoción?</span>
                                  <textarea
                                    className="form-control"
                                    rows={5}
                                    placeholder="Ejemplo. 
                                    Invita a un referido y 'ambos' obtendrán un 25% de descuento."
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row ">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  Acepto{" "}
                                  <a href="/TerminoCondiciones" target="_blank">
                                    términos y condiciones
                                  </a>
                                </span>
                              </label>
                            </div>
                            <div className="row">
                              <div className="col d-flex justify-content-end">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Guardar Cambios
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
