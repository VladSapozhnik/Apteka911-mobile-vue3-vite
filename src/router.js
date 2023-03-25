import {createRouter, createWebHistory} from "vue-router";
import Main from "./components/Main.vue";
import Basket from "./components/Basket.vue";

const routes = [
    {
        path: "/",
        name: 'main',
        component: Main
    },
    {
        path: "/basket",
        name: 'basket',
        component: Basket,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;