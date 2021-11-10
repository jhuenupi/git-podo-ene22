import React, { Component } from "react";
import { connect } from "react-redux";
import { createServicio } from "../servicios/actions";
import { Redirect } from "react-router-dom";

class AddServicio extends Component {
 constructor(props) {
   super(props);
   this.onChangeTitulo = this.onChangeName.bind(this);
   this.onChangePrecio = this.onChangeAnimal.bind(this);
   this.onChangeDetalle = this.onChangeBreed.bind(this);
   this.saveServicio = this.saveServicio.bind(this);
   this.state = {
     titulo: "",
     precio: "",
     detalle: "",
     redirect: false,
   };
 }
 onChangeName(e) {
    this.setState({ 
      nombre: e.target.value, 
    }); 
  }
   onChangeAnimal(e) {
     this.setState({
       precio: e.target.value,
     });
   }
   onChangeBreed(e) {
     this.setState({
       detalle: e.target.value,
     });
   }
 
  saveServicio() {
     const { nombre, precio, detalle } = this.state;
     this.props.createServicio(nombre, precio, detalle).then(() => {
       this.setState({
         redirect: true,
       });
     });
   }
 
  render() {
     const { redirect } = this.state;
     if (redirect) {
       return <Redirect to="/" />;
     }
     return (
       <div className="submit-form">
         <div>
           <div className="form-group">
             <label htmlFor="name">Nombre</label>
             <input
               type="text"
               className="form-control"
               id="name"
               required
               value={this.state.nombre}
               onChange={this.onChangeName}
               name="nombre"
             />
           </div>
 
          <div className="form-group">
             <label htmlFor="precio">Precio</label>
             <input
               type="text"
               className="form-control"
               id="precio"
               required
               value={this.state.animal}
               onChange={this.onChangeAnimal}
               name="precio"
             />
           </div>
           <div className="form-group">
             <label htmlFor="breed">Detalle</label>
             <input
               type="text"
               className="form-control"
               id="detalle"
               required
               value={this.state.breed}
               onChange={this.onChangeBreed}
               name="detalle"
             />
           </div> 
          <button onClick={this.saveServicio} className="btn btn-success">
             Submit
           </button>
         </div>
       </div>
     );
   }
  }
 
 export default connect(null, { createServicio })(AddServicio);