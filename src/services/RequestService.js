import http from "@/common/http-common.js"

class RequestService{
    getAll(){
        return http.get("/requests");
    }
}

export default new RequestService();