import { createWebHistory, createRouter } from "vue-router";

// import Cookies from 'js-cookie';

import LoginPage from '../pages/auth/index.vue';
import MagicLink from '../pages/auth/magic-link.vue';
import ForgotPassword from '../pages/auth/forgot-password.vue';
import DashboardPage from '../pages/dashboard/index.vue';

import ProfilePage from '../pages/profile/index.vue';
import ProfileEdit from '../pages/profile/edit.vue';
import ChangePassword from '../pages/profile/change-password.vue';

import SchoolList from "../pages/school/index"
import SchoolCreate from '../pages/school/create.vue';
import SchoolDetail from '../pages/school/detail.vue';
import SchoolEdit from '../pages/school/edit.vue';

import FoobarList from '../pages/foobar/index.vue';
import FoobarCreate from '../pages/foobar/index.vue';
import FoobarEdit from '../pages/foobar/index.vue';

import store from '../store/index';


let routes = [
    {
        path: "/",
        component: LoginPage,
        meta: { isLogin: true }
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
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: "/profile",
        component: ProfilePage,
        meta: { requiresAuth: true }
    },
    {
        path: "/profile/edit",
        component: ProfileEdit,
        meta: { requiresAuth: true }
    },
    {
        path: "/profile/change-password",
        component: ChangePassword,
        meta: { requiresAuth: true }
    },
    {
        path: '/schools',
        component: SchoolList,
        meta: { requiresAuth: true },
        name: "schools"
    },
    {
        path: '/schools/:id/detail',
        component: SchoolDetail,
        meta: { requiresAuth: true }
    },
    {
        path: '/schools/:id/edit',
        component: SchoolEdit,
        meta: { requiresAuth: true }
    },
    {
        path: '/schools/create',
        component: SchoolCreate,
        meta: { requiresAuth: true },
        name: "schools.create"
    },
    {
        path: '/foobar/list',
        component: FoobarList,
        meta: { requiresAuth: true }
    },
    {
        path: '/foobar/create',
        component: FoobarCreate,
        meta: { requiresAuth: true }
    },
    {
        path: '/foobar/edit',
        component: FoobarEdit,
        meta: { requiresAuth: true }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        return {
            path: '/',
            query: { redirect: to.fullPath },
        }
    } else if (!to.meta.requiresAuth && store.getters.isAuthenticated) {
        return {
            path: '/dashboard'
        }
    }
})

export default router;