import http from "../../Components/helpers/http";

class PodoServicios {

 getAll() {

   return http.get("/podoservicios");
 }

 get(id) {
   return http.get(`/podoservicios/${id}`);
 }
 create(data) {
   return http.post("/podoservicios", data);
 }
 update(id, data) {
   return http.put(`/podoservicios/${id}`, data);
 }

 delete(id) {
   return http.delete(`/podoservicios/${id}`);
 }
}

export default new PodoServicios();