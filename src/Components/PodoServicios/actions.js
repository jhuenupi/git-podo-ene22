import {

    CREATE_SERVICIO,   
    RETRIEVE_SERVICIOS,   
    UPDATE_SERVICIO,   
    DELETE_SERVICIO,   
   } from "./actionTypes";   
   import PodoServicios from "./PodoServicios";
   export const createServicio =

 (titulo, valor, detalle, email) => async (dispatch) => {
   try {
     const res = await PodoServicios.create({
       titulo,
       valor,
       detalle,
       email
     });
     dispatch({
       type: CREATE_SERVICIO,
       payload: res.data,
     });
     return Promise.resolve(res.data);
    } catch (err) { 
      return Promise.reject(err); 
    } 
  };

  export const retrieveServicios = () => async (dispatch) => {
    try {   
      const res = await PodoServicios.getAll();   
      dispatch({   
        type: RETRIEVE_SERVICIOS,   
        payload: res.data,   
      });   
    } catch (err) {   
      console.log(err);   
    }   
   };

   export const updateServicio = (id, data) => async (dispatch) => {
    try {   
      const res = await PodoServicios.update(id, data);   
      dispatch({   
        type: UPDATE_SERVICIO,   
        payload: data,   
      });   
      return Promise.resolve(res.data);   
    } catch (err) {   
      return Promise.reject(err);   
    }   
   };

   export const deleteServicio = (id) => async (dispatch) => {
    try {   
      await PodoServicios.delete(id);   
      dispatch({   
        type: DELETE_SERVICIO,   
        payload: { id },   
      });   
    } catch (err) {   
      console.log(err);   
    }   
   };