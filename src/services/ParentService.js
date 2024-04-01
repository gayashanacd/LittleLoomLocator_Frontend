import http from "@/common/http-common.js"

class ParentService{

    get(id) {
        return http.get(`/parents/${id}`);
    }

    getParentByUserId(id){
        return http.get(`/users/${id}/parent`);
    }

    getChildrenByParentId(id) {
        return http.get(`/parents/${id}/children`);
    }

    create(data){
        return http.post("/parents", data);
    }

    update(id, data){
        return http.put(`/parents/${id}`, data);
    }

}

export default new ParentService();