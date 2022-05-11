import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', name: '', component: () => import("../components/Home.vue") },
    { path: '/about', component: () => import("../components/about.vue") },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes
})

//导出路由
export default router