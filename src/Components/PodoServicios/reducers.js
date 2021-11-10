import {
    CREATE_SERVICIO,   
    RETRIEVE_SERVICIOS,   
    UPDATE_SERVICIO,   
    DELETE_SERVICIO,   
   } from "./actionTypes";
   const initialState = [];
   function servicioReducer(servicios = initialState, action) {
    const { type, payload } = action;   
    switch (type) {   
      case CREATE_SERVICIO:   
        return [...servicios, payload];   
      case RETRIEVE_SERVICIOS:   
        return payload;   
      case UPDATE_SERVICIO:   
        return servicios.map((servicio) => {   
          if (servicio.id === payload.id) {   
            return {   
              ...servicio,   
              ...payload,   
            };   
          } else {   
            return servicio;
          }
        });
   
      case DELETE_SERVICIO:   
        return servicios.filter(({ id }) => id !== payload.id);   
      default:   
        return servicios;   
    }   
   }   
   export default servicioReducer;