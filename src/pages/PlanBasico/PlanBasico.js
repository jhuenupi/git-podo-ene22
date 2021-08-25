import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PlanBasico extends Component {
  constructor(props) {
    super(props);

    this.planseleccionado = React.createRef();
    this.meses=React.createRef();
    this.cadames=React.createRef();
    this.subtotal=React.createRef();
    this.total=React.createRef();
    this.impto=React.createRef();
    this.btnpay=React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    //alert("Your favorite flavor is: " + event.target.value);

    if (event.target.value==="1")
    
    {
      this.meses.current.value=event.target.value;
      this.cadames.current.value="$10.000";
      this.subtotal.current.value="$10.000";
      this.impto.current.value="$1.980";
      this.total.current.value="$11.900";
      //this.btnpay.disabled=null;
    }
    if (event.target.value==="6")
    
    {
        this.meses.current.value=event.target.value;
        this.cadames.current.value="$8.500";
        this.subtotal.current.value="$51.000";
        this.impto.current.value="$9.690";
        this.total.current.value="$60.690";
    }
    if (
        event.target.value==="12")
    {
        this.meses.current.value=event.target.value;
        this.cadames.current.value="$8.000";
        this.subtotal.current.value="$96.000";
        this.impto.current.value="$18.240";
        this.total.current.value="$114.240";    
    }
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h2>PLAN BÁSICO PODOUBICA</h2>
          
          <label>
            Selecciona tu plan:
            <div class="input-field">
            <select
              class="browser-default"              
              onChange={this.handleChange}
            >
              <option value="" disabled selected>Selecciona tu opción</option>

              <option value="1">PLAN 1 Meses x $12.000</option>  
              <option value="6">PLAN 6 Meses x $51.000</option>
              <option value="12">PLAN 12 Meses x $96.000</option>
            </select>
            </div>
          </label>
          
          <div>
            <table class="">
              <thead>
                <tr>
                  <th data-field="id">Meses</th>
                  <th data-field="name">Valor Mes</th>
                  <th data-field="price">Valor Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><input disabled ref={this.meses} ></input></td>
                  <td><input disabled ref={this.cadames} ></input></td>
                  <td><input disabled ref={this.subtotal} ></input></td>
                </tr>
                <tr>
                  <td></td>
                  <td>IVA</td>
                  <td><input disabled ref={this.impto} ></input></td>
                </tr>
                <tr>
                  <td></td>
                  <td>TOTAL</td>
                  <td><input disabled ref={this.total} ></input></td>
                </tr>
              </tbody>
            </table>
            <div class="row ">
                <p></p>
                <div class="col s12"/>
                <div class="col s9"></div>
                <div class="col s3">
                    <a className="waves-effect waves-light btn " disabled ref={this.btnpay}>PAGAR</a>
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
    );
  }
}
