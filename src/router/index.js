import { createWebHistory, createRouter } from "vue-router";
import LoginPage from '../pages/auth/index.vue';
import MagicLink from '../pages/auth/magic-link.vue';
import ForgotPassword from '../pages/auth/forgot-password.vue';
import DashboardPage from '../pages/dashboard/index.vue';
import ProfilePage from '../pages/profile/index.vue';

const routes = [
    {
        path: "/",
        component: LoginPage
    },
    {
        path: "/magic-link",
        component: MagicLink
    },
    {
        path: "/forgot-password",
        component: ForgotPassword
    },
    {
        path: "/dashboard",
        component: DashboardPage
    },
    {
        path: "/profile",
        component: ProfilePage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;