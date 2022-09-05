import { createWebHistory, createRouter } from "vue-router";

import Cookies from 'js-cookie';

import LoginPage from '../pages/auth/index.vue';
import MagicLink from '../pages/auth/magic-link.vue';
import ForgotPassword from '../pages/auth/forgot-password.vue';
import DashboardPage from '../pages/dashboard/index.vue';

import ProfilePage from '../pages/profile/index.vue';
import ProfileEdit from '../pages/profile/edit.vue';
import ChangePassword from '../pages/profile/change-password.vue';

import FoobarList from '../pages/foobar/index.vue';
import FoobarCreate from '../pages/foobar/index.vue';
import FoobarEdit from '../pages/foobar/index.vue';


let routes = [
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
    if (to.meta.requiresAuth && !Cookies.get('access_token')) {
        return {
            path: '/',
            query: { redirect: to.fullPath },
        }
    }else if (!to.meta.requiresAuth && Cookies.get('access_token')) {
        return {
          path: '/dashboard'
        }
    }
})

export default router;