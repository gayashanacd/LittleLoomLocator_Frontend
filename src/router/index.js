import { createWebHistory, createRouter } from "vue-router";
import UserLogin from "@/components/user/UserLogin.vue";
import ParentView from "@/components/parent/ParentView.vue";
import RequestView from "@/components/request/RequestView.vue";
import ChildrenView from "@/components/children/ChildrenView.vue";
import InstituteView from "@/components/institute/InstituteView.vue";
import RegistrationView from "@/components/registration/RegistrationView.vue";

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
        path : "/request",
        alias : '/request',
        name : "RequestView",
        component : RequestView
    },
    {
        path : "/children",
        alias : '/children',
        name : "ChildrenView",
        component : ChildrenView
    },
    {
        path : "/institute",
        alias : '/institute',
        name : "InstituteView",
        component : InstituteView
    },
    {
        path : "/register",
        alias : '/register',
        name : "RegistrationView",
        component : RegistrationView
    }
]

const router = createRouter(
    {
        history : createWebHistory(),
        routes 
    }
)

export default router;