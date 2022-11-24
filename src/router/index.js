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
		// redirect: 'dashboard',
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
						name: 'school-detail',
						component: () => import('@/pages/school/detail.vue'),
						meta: {
							requiresAuth: true,
							breadcrumbName: 'Detail Sekolah'
						}
					},

					{
						path: ':npsn?',
						component: RouterView,
						meta: { requiresAuth: true },
						children: [
							{
								path: 'school-classes',
								name: 'school-classes',
								component: RouterView,
								meta: { requiresAuth: true },
								children: [
									{
										path: '',
										name: 'school-classes-index',
										component: () => import('@/pages/school-classes/index.vue'),
										meta: {
											breadcrumbName: 'Daftar Kelas'
										}
									},
									{
										path: 'students',
										name: 'students',
										component: RouterView,
										meta: { requiresAuth: true },
										children: [
											{
												path: '',
												name: 'students-index',
												component: () => import('@/pages/students/index.vue'),
												meta: {
													breadcrumbName: 'Daftar Kelas'
												}
											}
										]
									},
								]
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
							},
							{
								path: 'admins',
								name: 'admins',
								component: RouterView,
								meta: { requiresAuth: true },
								children: [
									{
										path: '',
										name: 'admins-index',
										component: () => import('@/pages/admins/index.vue'),
										meta: {
											breadcrumbName: 'Daftar Admin'
										}
									}
								]
							},
							{
								path: 'school-years',
								name: 'school-years',
								component: RouterView,
								meta: { requiresAuth: true },
								children: [
									{
										path: '',
										name: 'school-years-index',
										component: () => import('@/pages/school-years/index.vue'),
										meta: {
											breadcrumbName: 'Daftar Admin'
										}
									}
								]
							},
							{
								path: 'courses',
								name: 'courses',
								component: RouterView,
								meta: { requiresAuth: true },
								children: [
									{
										path: '',
										name: 'courses-index',
										component: () => import('@/pages/courses/index.vue'),
										meta: {
											breadcrumbName: 'Daftar Admin'
										}
									}
								]
							},
							{
								path: 'schedules',
								name: 'schedules',
								component: RouterView,
								meta: { requiresAuth: true },
								children: [
									{
										path: '',
										name: 'schedules-index',
										component: () => import('@/pages/schedules/index.vue'),
										meta: {
											breadcrumbName: 'Daftar Admin'
										}
									}
								]
							},
						]
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
