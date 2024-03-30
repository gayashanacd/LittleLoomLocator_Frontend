import http from "@/common/http-common.js"

class InstituteService{

    get(id) {
        return http.get(`/institutes/${id}`);
    }

    create(data){
        return http.post("/institutes", data);
    }

    update(id, data){
        return http.put(`/institutes/${id}`, data);
    }

}

export default new InstituteService();