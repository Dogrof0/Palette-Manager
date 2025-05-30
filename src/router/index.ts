import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Homepage/index.vue'),
        },
        {
            path: '/palette/:id',
            name: 'SinglePalette',
            component: () => import('../views/SinglePalette/index.vue'),
        },
        {
            path: '/user',
            name: 'User',
            component: () => import('../views/User/index.vue'),
        },
    ],
})

export default router