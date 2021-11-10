import React, { Component } from "react";
import getUser from "../../Components/helpers/getUser";
import Autocomplete from "@material-ui/core/Autocomplete";
import { TextField } from "@material-ui/core";

export default class Regiones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      userpod: [],
      isLoadedUser: false,
    };
  }

  getUser = async () => {
    const url = "http://localhost:1337/usuariospods";
    const res = await fetch(url);
    this.setState({ userpod: await res.json() });
    this.setState({ isLoadedUser: true });
  };

  async componentDidMount() {
    const response = await fetch(`http://localhost:1337/regiones`);
    const json = await response.json();
    this.setState({ isLoaded: true, items: json });
  }
  existeUsuario = () => {
    getUser().then((newUser) => {
      this.setState({ userpod: newUser });
    });
  };
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <>
          <div>Loading...</div>
          {console.log(this.state)}
        </>
      );
    } else {
      return (
        <>
          <select class="browser-default" placeholder={'Enter Name'}>
            {/* <ul>                      */}
            {items.map((item) => (
              <option value={item.id}>{item.NombreRegion}</option>
              //  <li key={item.id}>
              //       Name : {item.NombreRegion}
              //  </li>
            ))}
            ;{/* </ul> */}
          </select>
        </>
      );
    }
  }
}
