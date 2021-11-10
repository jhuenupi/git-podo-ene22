import React, {useState, useEffect, Component } from "react";
import PropTypes from "prop-types";
import {useAuth0} from '@auth0/auth0-react'
import Rut from "../../Components/helpers/Rut";

const PlanBasico = () => {  
  
    const [plan, setPlan] = useState(null);
    const [mes, setMes] = useState(null);
    const [DctoPtg, setDctoPtg] = useState(null);
    const [Neto, setNeto] = useState(null);
    const [Dcto$, setDcto$] = useState(null);
    const [ValorST, setValorST] = useState(null);
    const [IVA, setIva] = useState(null);
    const [ValorT, setValorT] = useState(null);
    const [rut,setRut] = useState("")
    const [rutValido,setRutValido] = useState(false)
    const {user} = useAuth0()
    const getPlan =   (value) => {
      
      if (value==="1")
      { 
          setMes("1")
          setDctoPtg("20%")
          setNeto("$8.395")
          setDcto$("$1.679")
          setValorST("$6.716")
          setIva("$1.276")
          setValorT("$7.992")
          
      }
      if (value==="6")
      { 
        setMes("6")
        setDctoPtg("30%")
        setNeto("$50.370")
        setDcto$("$15.111")
        setValorST("$35.259")
        setIva("$6.699")
        setValorT("$41.958")              
      }
      if (value==="12")
      { 
        setMes("12")
        setDctoPtg("50%")
        setNeto("$100.739")
        setDcto$("$50.370")
        setValorST("$50.370")
        setIva("$9.570")
        setValorT("$59.940")                            
      }
    }
  
    return (
      <>
      <div className="container">
        <form >
          <h2>PLAN BÁSICO PODOUBICA</h2>


          
          <h5>Selecciona tu plan:</h5>
          <label>
            
            <div class="input-field">
            <select
              class="browser-default"              
              onChange={(e)=>{
                getPlan(e.target.value)
              }}
            >
              <option value="" disabled selected>Selecciona tu plan</option>

              <option value="1">PLAN 1 Meses</option>  
              <option value="6">PLAN 6 Meses</option>
              <option value="12">PLAN 12 Meses</option>
            </select>
            </div>
          </label>
          
          <div>
            <table className="">
              <thead>
                <tr>
                  <th data-field="id">Meses</th>
                  <th data-field="name">% Dcto.</th>
                  <th data-field="name">Valor Neto</th>
                  <th data-field="name">$ Dcto.</th>
                  <th data-field="price">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>{mes}</p></td>
                  <td><p>{DctoPtg}</p></td>
                  <td><p>{Neto}</p></td>
                  <td><p>{Dcto$}</p></td>
                  <td><p>{ValorST}</p></td>
                </tr>
                <tr>
                  <td></td>
                  <td>IVA</td>
                  <td><p>{IVA}</p></td>
                </tr>
                <tr>
                  <td></td>
                  <td>TOTAL</td>
                  <td><p>{ValorT}</p></td>
                </tr>
              </tbody>
            </table>
            <h5>INGRESE DATOS BÁSICOS</h5>
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
                                              placeholder="user@example.com"
                                              value={user.email}
                                            />
                                          </div>                                          
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <p>Telefono movil</p>
                                                <input
                                                className="form-control"
                                                type="text"
                                                placeholder="+569 1234 5678"
                                                value=""
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
                                  <div className="row">

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
            <div class="row ">
            <label>
              <input type="checkbox" />
              <span>Acepto 
              <a style={{display: "table-cell"}} href="../TerminoCondiciones/TerminosyCondiciones.html" target="_blank">terminos y condiciones</a></span>
              </label>
              </div>            
            <div class="row ">
                <p></p>
                <div class="col s12"/>
                <div class="col s9"></div>
                <div class="col s3">
                    <a className="waves-effect waves-light btn ">PAGAR</a>
                </div>
            </div>
            <div className="container col 12 ">
            <p></p>
            </div>
            <div>

            </div>

          </div>
        </form>
      </div>
      </>
    );
}

export default PlanBasico;