import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { 
        path: '/', 
        name: 'home', component: () => import("../view/Home.vue"), 
        children: [
            {
                path: '/memo', 
                component: () => import("../view/memo.vue")
            }
        ] 
    },
    { path: '/about', component: () => import("../view/about.vue") },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes
})

//导出路由
export default router