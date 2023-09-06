import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
const routes = [
        {
            path: '/',
            component: Home,
        },
    ];

// @ts-ignore
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
export default router;