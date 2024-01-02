// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './App.vue';
import About from './Pages/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
