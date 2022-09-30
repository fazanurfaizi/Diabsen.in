import { createWebHistory, createRouter, RouterView } from "vue-router";

import BaseLayout from '@/layouts/BaseLayout.vue'
import LoginPage from '../pages/auth/index.vue';
import MagicLink from '../pages/auth/magic-link.vue';
import ForgotPassword from '../pages/auth/forgot-password.vue';
import DashboardPage from '../pages/dashboard/index.vue';

import ProfilePage from '../pages/profile/index.vue';
import ProfileEdit from '../pages/profile/edit.vue';
import ChangePassword from '../pages/profile/change-password.vue';

import store from '../store/index'


let routes = [
    {
        path: "/auth",
        name: 'login',        
        component: LoginPage
    },
    {
        path: "/magic-link",
        name: 'magic-link',
        component: MagicLink
    },
    {
        path: "/forgot-password",
        name: 'forgot-password',
        component: ForgotPassword
    },
    {
        path: '/',
        name: 'index',
        component: BaseLayout,
        meta: {
            breadcrumbName: 'Beranda'
        },
        children: [
            {
                path: "/dashboard",
                name: 'dashboard',
                component: DashboardPage,
                meta: { requiresAuth: true }
            },
            {
                path: "/profile",
                name: 'profile',
                component: ProfilePage,
                meta: { requiresAuth: true }
            },
            {
                path: "/profile/edit",
                name: 'profile-edit',
                component: ProfileEdit,
                meta: { requiresAuth: true }
            },
            {
                path: "/profile/change-password",
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
                        path: '/schools/create',
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
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        return {
            path: '/',
            query: { redirect: to.fullPath },
        }
    }else if (!to.meta.requiresAuth && store.getters.isAuthenticated) {
        return {
            path: '/dashboard'
        }
    }
})

export default router;