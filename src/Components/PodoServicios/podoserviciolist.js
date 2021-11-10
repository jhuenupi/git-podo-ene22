import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveServicios, deleteServicio } from "./actions";
class ServicioList extends Component {
 componentDidMount() {
   this.props.retrieveServicios();
 }
 removeServicio = (id) => {
   this.props.deleteServicio(id).then(() => {
     this.props.retrieveServicios();
   });
 };

 render() {
   const { servicios } = this.props;
   return (
     <div className="list row">
       <div className="col-md-6">
         <h4>Servicio List</h4>
         <div>
           <Link to="/add-servicio">
             <button className="button-primary">Add servicio</button>
           </Link>
         </div>
         <table className="u-full-width">
           <thead>
             <tr>
               <th>Titulo</th>
               <th>Precio estimado</th>
               <th>Detalle</th>
             </tr>
           </thead>
           <tbody>
             {servicios &&
               servicios.map(
                 ({ id, titulo,precio, detalle }, i) => (
                   <tr key={i}>
                     <td>{titulo}</td>
                     <td>{precio}</td>
                     <td>{detalle}</td>
                     <td>
                       <button onClick={() => this.removeServicio(id)}>
                         Delete
                       </button>
                       <Link to={`/edit-servicio/${id}`}>
                         <button>Edit</button>
                       </Link>
                     </td>
                   </tr>
                 )
               )}
           </tbody>
         </table>
       </div>
     </div>
   );
 }
}
const mapStateToProps = (state) => {
 return {
   servicios: state.servicios,
 };
};

export default connect(mapStateToProps, { retrieveServicios, deleteServicio })(ServicioList);