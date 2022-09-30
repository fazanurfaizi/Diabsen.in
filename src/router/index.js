import { createWebHistory, createRouter, RouterView } from "vue-router";

import BaseLayout from '@/layouts/BaseLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import MagicLink from '../pages/auth/magic-link.vue';

import ProfilePage from '../pages/profile/index.vue';
import ProfileEdit from '../pages/profile/edit.vue';
import ChangePassword from '../pages/profile/change-password.vue';

import store from '../store/index'

let routes = [
    {
        path: '/auth',
        name: 'auth',
        redirect: '/auth/login',
        component: AuthLayout,
        children: [
            {
                path: "login",
                name: 'login',        
                component: () => import('@/pages/auth/login.vue')
            },
            {
                path: "magic-link",
                name: 'magic-link',
                component: MagicLink
            },
            {
                path: "forgot-password",
                name: 'forgot-password',
                component: () => import('@/pages/auth/forgot-password.vue')
            },
            {
                path: "reset-password",
                name: 'reset-password',
                component: () => import('@/pages/auth/reset-password.vue')
            },
        ]
    },
    {
        path: '/',
        name: 'index',
        redirect: 'dashboard',
        component: BaseLayout,
        meta: {
            breadcrumbName: 'Beranda'
        },
        children: [
            {
                path: "dashboard",
                name: 'dashboard',
                component: () => import('@/pages/dashboard/index.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: "profile",
                name: 'profile',
                component: ProfilePage,
                meta: { requiresAuth: true }
            },
            {
                path: "profile/edit",
                name: 'profile-edit',
                component: ProfileEdit,
                meta: { requiresAuth: true }
            },
            {
                path: "profile/change-password",
                name: 'profile-change-password',
                component: ChangePassword,
                meta: { requiresAuth: true }
            },
            {            
                path: '/schools',   
                name: 'schools-layout',
                component: RouterView,
                meta: {
                    breadCrumb: 'Sekolah'
                },
                children: [
                    {
                        path: '',
                        name: 'school-list',
                        component: () => import('@/pages/school/index.vue'),
                        meta: {
                            requiresAuth: true,                            
                        },                            
                    },
                    {
                        path: 'create',
                        name: "school-create",
                        component: () => import('@/pages/school/create.vue'),
                        meta: {
                            requiresAuth: true,
                            breadCrumb: 'Tambah Sekolah'
                        },                        
                    },
                ]
            },
        
            {
                path: '/foobar',
                name: 'foobar-layout',
                component: RouterView,
                meta: {
                    breadCrumb: 'FooBar'
                },
                children: [
                    {
                        path: '',
                        name: 'foobar-list',
                        component: () => import('@/pages/foobar/index.vue'),
                        // meta: { requiresAuth: true }
                    },
                    {
                        path: '/create',
                        name: 'foobar-create',
                        component: () => import('@/pages/foobar/create.vue'),
                        meta: {
                            breadCrumb: 'Tambah'
                        },
                        // meta: { requiresAuth: true }
                    },
                    {
                        path: '/edit',
                        name: 'foobar-edit',
                        component: () => import('@/pages/foobar/edit.vue'),
                        meta: {
                            breadCrumb: 'Ubah'
                        },
                        // meta: { requiresAuth: true }
                    },
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,    
});

router.beforeEach((to) => {
    if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {        
        return {
            path: '/auth/login',
            query: { redirect: to.fullPath },
        }
    } else if (!to.meta.requiresAuth && store.getters['auth/isAuthenticated']) {
        return {
            path: '/dashboard'
        }
    }
})

export default router;