import { createWebHistory, createRouter, RouterView } from 'vue-router'

import BaseLayout from '@/layouts/BaseLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import MagicLink from '../pages/auth/magic-link.vue'

import ProfileEdit from '../pages/profile/edit.vue'
import ChangePassword from '../pages/profile/change-password.vue'

import store from '../store/index'

let routes = [
	{
		path: '/auth',
		name: 'auth',
		redirect: '/auth/login',
		component: AuthLayout,
		children: [
			{
				path: 'login',
				name: 'login',
				component: () => import('@/pages/auth/login.vue'),
			},
			{
				path: 'magic-link',
				name: 'magic-link',
				component: MagicLink,
			},
			{
				path: 'forgot-password',
				name: 'forgot-password',
				component: () => import('@/pages/auth/forgot-password.vue'),
			},
			{
				path: 'reset-password',
				name: 'reset-password',
				component: () => import('@/pages/auth/reset-password.vue'),
			},
		],
	},
	{
		path: '/',
		name: 'index',
		redirect: 'dashboard',
		component: BaseLayout,
		meta: {
			breadcrumbName: 'Beranda',
		},
		children: [
			{
				path: 'dashboard',
				name: 'dashboard',
				component: () => import('@/pages/dashboard/index.vue'),
				meta: { requiresAuth: true },
			},
			{
				path: '/profile',
				name: 'profile',
				component: RouterView,
				meta: {
					breadCrumb: 'Profil',
				},
				children: [
					{
						path: '',
						name: 'profile-user',
						component: () => import('@/pages/profile/index.vue'),
						meta: { requiresAuth: true },
					},
					{
						path: 'edit',
						name: 'profile-edit',
						component: ProfileEdit,
						meta: { requiresAuth: true },
					},
					{
						path: 'change-password',
						name: 'profile-change-password',
						component: ChangePassword,
						meta: { requiresAuth: true },
					},
				],
			},
			{
				path: 'schools',
				name: 'schools',
				component: RouterView,
				meta: {
					breadCrumb: 'Sekolah',
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
						name: 'school-create',
						component: () => import('@/pages/school/create.vue'),
						meta: {
							requiresAuth: true,
							breadcrumbName: 'Tambah Sekolah',
						},
					},
					{
						path: ':id/edit',
						component: () => import('@/pages/school/edit.vue'),
						meta: { requiresAuth: true },
					},
					{
						path: ':npsn',
						component: RouterView,
						meta: { requiresAuth: true },
						children: [
							{
								path: '',
								name: 'school-detail',
								component: () => import('@/pages/school/detail.vue'),
								meta: {
									requiresAuth: true,
									breadcrumbName: 'Detail Sekolah'
								}
							},
							{
								path: 'teachers',
								name: 'teachers',
								component: RouterView,
								meta: { requiresAuth: true },
								children: [
									{
										path: '',
										name: 'teachers-index',
										component: () => import('@/pages/teachers/index.vue'),
										meta: {
											breadcrumbName: 'Daftar Guru'
										}
									}
								]
							}
						]
					},
				],
			},
			{
				path: '/foobar',
				name: 'foobar',
				component: RouterView,
				meta: {
					breadCrumb: 'FooBar',
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
							breadCrumb: 'Tambah',
						},
						// meta: { requiresAuth: true }
					},
					{
						path: '/edit',
						name: 'foobar-edit',
						component: () => import('@/pages/foobar/edit.vue'),
						meta: {
							breadCrumb: 'Ubah',
						},
						// meta: { requiresAuth: true }
					},
				],
			},
			{
				path: '/academic-years',
				name: 'academic-years',
				component: RouterView,
				meta: {
					breadCrumb: 'Tahun Ajaran',
				},
				children: [
					{
						path: '',
						name: 'academic-year-list',
						component: () =>
							import('@/pages/academic-year/index.vue'),
						meta: {
							requiresAuth: true,
						},
					},
					{
						path: '/create',
						name: 'academic-year-create',
						component: () =>
							import('@/pages/academic-year/create.vue'),
						meta: {
							breadCrumb: 'Tambah',
							requiresAuth: true,
						},
					},
					{
						path: '/edit',
						name: 'foobar-edit',
						component: () => import('@/pages/foobar/edit.vue'),
						meta: {
							breadCrumb: 'Ubah',
							requiresAuth: true,
						},
					},
				],
			},
			{
				path: '/users',
				name: 'users',
				component: RouterView,
				meta: {
					breadCrumb: 'Pengguna',
				},
				children: [
					{
						path: '',
						name: 'user-list',
						component: () => import('@/pages/users/index.vue'),
						meta: {
							requiresAuth: true,
						},
					},
					{
						path: '/create',
						name: 'user-create',
						component: () => import('@/pages/users/create.vue'),
						meta: {
							breadCrumb: 'Tambah',
							requiresAuth: true,
						},
					},
					{
						path: '/edit',
						name: 'foobar-edit',
						component: () => import('@/pages/foobar/edit.vue'),
						meta: {
							breadCrumb: 'Ubah',
							requiresAuth: true,
						},
					},
				],
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
		next({
			path: '/auth/login',
			query: {
				redirect: to.fullPath,
			},
		})
	} else if (!to.meta.requiresAuth && store.getters['auth/isAuthenticated']) {
		next({
			name: 'dashboard',
		})
	}

	next()
})

export default router
