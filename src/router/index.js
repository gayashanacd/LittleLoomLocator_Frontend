import { createWebHistory, createRouter } from "vue-router";
import UserLogin from "@/components/user/UserLogin.vue";
// import StudentProfile from "../components/StudentProfile.vue";

const routes = [
    {
        path : "/",
        alias : '/login',
        name : "login",
        component : UserLogin
    },
    // {
    //     path : "/profile",
    //     alias : '/profile',
    //     name : "studentProfile",
    //     component : StudentProfile
    // }
]

const router = createRouter(
    {
        history : createWebHistory(),
        routes 
    }
)

export default router;