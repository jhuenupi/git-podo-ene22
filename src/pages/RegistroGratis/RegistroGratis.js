import React, { Component,useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Rut from '../../Components/helpers/Rut';


const RegistroGratis = () =>  {
    const [rut,setRut] = useState("")
    const [rutValido,setRutValido] = useState(false)
    const { user } = useAuth0();
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
                                            <Rut value={rut} onChange={(e)=>setRut(e.target.value)} onValid={setRutValido} >
                                                <input type="text" name="rut" placeholder="Rut" required></input>
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
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                    </div>
                                  </div>
                                  <div class="row ">
                                <label>
                                <input type="checkbox" />
                                <span>Acepto <a  href="/TerminoCondiciones" target="_blank">términos y condiciones</a></span>
                                </label>
                                </div>                                    
                                  <div className="row">
                                    <div className="col d-flex justify-content-end">
                                      <button
                                        className="btn btn-primary"
                                        type="submit"
                                      >Guardar Cambios
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
        )
    }
    export default RegistroGratis;
