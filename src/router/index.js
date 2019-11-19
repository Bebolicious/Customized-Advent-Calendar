import Vue from 'vue';
import VueRouter from 'vue-router';
import Calendar from '../views/Calendar.vue';
import Setup from '../views/Setup.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'setup',
        component: Setup
    },
    {
        path: '/Calendar',
        name: 'Calendar',
        component: Calendar
    }
];

const router = new VueRouter({
    routes
});

export default router;
