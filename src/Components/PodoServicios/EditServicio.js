import React, { Component } from "react";
import { connect } from "react-redux";
import { updateServicio } from "../servicios/actions";
import { Redirect } from "react-router-dom";
import ServicioService from "../servicios/serviciosService";
class EditServicio extends Component {
 constructor(props) {
   super(props);
   this.onChangeNombre = this.onChangeName.bind(this);
   this.onChangePrecio = this.onChangeAnimal.bind(this);
   this.onChangeDetalle = this.onChangeBreed.bind(this);
   this.saveServicio = this.saveServicio.bind(this);
   this.state = {

     currentServicio: {

       nombre: "",
       precio: "",
       detalle: "",
     },

     redirect: false,
   };
 }

 componentDidMount() {

   this.getServicio(window.location.pathname.replace("/edit-servicio/", ""));

 }

 onChangeNobre(e) {

   const nombre = e.target.value;

   this.setState(function (prevState) {

     return {

       currentServicio: {

         ...prevState.currentServicio,

         nombre: nombre,

       },

     };

   });

 }

 onChangePrecio(e) {

   const precio = e.target.value;

   this.setState(function (prevState) {

     return {

       currentServicio: {

         ...prevState.currentServicio,

         precio: precio,

       },

     };

   });

 }

 onChangeDetalle(e) {

   const detalle = e.target.value;

   this.setState(function (prevState) {

     return {

       currentServicio: {

         ...prevState.currentServicio,

         detalle: detalle,

       },

     };

   });

 }



 getServicio(id) {

   ServicioService.get(id).then((response) => {

     this.setState({

       currentServicio: response.data,

     });

   });

 }

 saveServicio() {

   this.props

     .updateServicio(this.state.currentServicio.id, this.state.currentServicio)
     .then(() => {
       this.setState({
         redirect: true,
       });
     });
 }

 render() {

   const { redirect, currentServicio } = this.state;

   if (redirect) {
     return <Redirect to="/" />;
   }
   return (
     <div className="submit-form">
       <div>
         <div className="form-group">
           <label htmlFor="nombre">Nombre</label>
           <input
             type="text"
             className="form-control"
             id="nombre"
             required
             value={currentServicio.nombre}
             onChange={this.onChangeNobre}
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
             value={currentServicio.precio}
             onChange={this.onChangePrecio}
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
             value={currentServicio.detalle}
             onChange={this.onChangeDetalle}
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

export default connect(null, { updateServicio })(EditServicio);