import { createWebHistory, createRouter } from "vue-router";
import Ejercicio1 from "@/views/ejercicio1.vue";
import Ejercicio2 from "@/views/ejercicio2.vue";

const routes = [
    {
        path: "/",
        name: "Ejercicio1",
        component: Ejercicio1,
    },
    {
        path: "/ejercicio2",
        name: "Ejercicio2",
        component: Ejercicio2
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;