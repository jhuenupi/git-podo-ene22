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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    //alert("Your favorite flavor is: " + event.target.value);

    if (event.target.value==="1")
    
    {
      this.meses.current.value=event.target.value;
      this.cadames.current.value="$12.000";
      this.subtotal.current.value="$12.000";
      this.impto.current.value="$2.280";
      this.total.current.value="$14.280";
    }
    if (event.target.value==="6")
    
    {
        this.meses.current.value=event.target.value;
        this.cadames.current.value="$10.200";
        this.subtotal.current.value="$61.200";
        this.impto.current.value="$11.628";
        this.total.current.value="$72.828";
    }
    if (
        event.target.value==="12")
    {
        this.meses.current.value=event.target.value;
        this.cadames.current.value="$9.600";
        this.subtotal.current.value="$115.200";
        this.impto.current.value="$21.888";
        this.total.current.value="$137.088";    
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
          <h2>PLAN PLUS PODOUBICA</h2>
          <label>
            Selecciona tu plan:
            <select
              class="browser-default"
              onChange={this.handleChange}
            >
              <option disabled selected value="0">Seleciona una opción</option>  
              <option value="1">PLAN 1 Meses x $12.000</option>  
              <option value="6">PLAN 6 Meses x $61.200</option>
              <option value="12">PLAN 12 Meses x $115.200</option>
            </select>
          </label>
          <div>
            <table classname="highlight">
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
            <div className="container col 22 ">
                <p></p>
                <div className="col s20"/>
                <div className="col s2">
                    <a className="waves-effect waves-light btn">PAGAR</a>
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
