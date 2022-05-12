import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', name: '', component: () => import("../view/Home.vue") },
    { path: '/about', component: () => import("../view/about.vue") },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes
})

//导出路由
export default router