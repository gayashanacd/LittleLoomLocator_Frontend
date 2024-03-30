import http from "@/common/http-common.js"

class InstituteService{
  search(params){
    return http.get(`/institutes?name=${params.name}&province=${params.province}&city=${params.city}&ageGroup=${params.ageGroup}`);
  }
}

export default new InstituteService();