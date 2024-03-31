import http from "@/common/http-common.js"

class RequestService{
  getAll(){
    return http.get("/requests");
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
}

export default new RequestService();