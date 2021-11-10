import { configureStore } from "@reduxjs/toolkit";

import servicioReducer from "../../PodoServicios/reducers"


export default configureStore({

 reducer: {

   servicios: servicioReducer,

 },

});