import http from "@/common/http-common.js"

class InstituteService{
  search(params){
    return http.get(`/institutes?name=${params.name}&province=${params.province}&city=${params.city}&ageGroup=${params.ageGroup}`);
  }
  get(id) {
      return http.get(`/institutes/${id}`);
  }
}

export default new InstituteService();