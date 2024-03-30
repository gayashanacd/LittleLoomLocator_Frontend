import { createWebHistory, createRouter } from "vue-router";
import UserLogin from "@/components/user/UserLogin.vue";
import ParentView from "../components/parent/ParentView.vue";
import InstituteView from "../components/institute/InstituteView.vue";

const routes = [
    {
        path : "/",
        alias : '/login',
        name : "login",
        component : UserLogin
    },
    {
        path : "/login",
        alias : '/login',
        name : "login",
        component : UserLogin
    },
    {
        path : "/parent",
        alias : '/parent',
        name : "ParentView",
        component : ParentView
    },
    {
        path : "/institute",
        alias : '/institute',
        name : "InstituteView",
        component : InstituteView
    }
]

const router = createRouter(
    {
        history : createWebHistory(),
        routes 
    }
)

export default router;