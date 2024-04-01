import http from "@/common/http-common.js"

class RequestService{
  getAll(){
    return http.get("/requests");
  }

  search(params){
    return http.get(`/requests?instituteId=${params.instituteId}&parentName=${params.parentName}&status=${params.status}&type=${params.type}`);
  }

  getAllRequestsForParent(parentId){
    return http.get(`/requests?parentId=${parentId}`);
  }

  createRequest(data){
    return http.post("/requests", data);
  }

  updateRequest(data){
    return http.put(`/requests/${data.id}`, data);
  }

  deleteRequest(id){
    return http.delete(`/requests/${id}`);
  }
}

export default new RequestService();