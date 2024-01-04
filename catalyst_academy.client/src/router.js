// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './App.vue';
import About from './Pages/About.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About_us', component: About },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
