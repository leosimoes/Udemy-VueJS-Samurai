// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import VHome from './views/VHome.vue';
import VAbout from './views/VAbout.vue';


const routes = [
    { path: '/', component: VHome, name: 'VHome' },
    { path: '/about', component: VAbout, name: 'VAbout' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
