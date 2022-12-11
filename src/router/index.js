import { createWebHistory, createRouter, RouterView } from 'vue-router'

import BaseLayout from '@/layouts/BaseLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import MagicLink from '../pages/auth/magic-link.vue'

import ProfileEdit from '../pages/profile/edit.vue'
import ChangePassword from '../pages/profile/change-password.vue'

import auth from '@/core/middleware/auth'

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
			requiresAuth: true,
		},
		children: [
			{
				path: 'dashboard',
				name: 'dashboard',
				component: () => import('@/pages/dashboard/index.vue'),
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
					},
					{
						path: 'edit',
						name: 'profile-edit',
						component: ProfileEdit,
					},
					{
						path: 'change-password',
						name: 'profile-change-password',
						component: ChangePassword,
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
					},
					{
						path: 'create',
						name: 'school-create',
						component: () => import('@/pages/school/create.vue'),
					},
					{
						path: ':npsn(\\d+)/edit',
						name: 'school-edit',
						component: () => import('@/pages/school/edit.vue'),
					},
					{
						path: ':npsn(\\d+)/detail',
						name: 'school-detail',
						component: () => import('@/pages/school/detail.vue'),
					},

					{
						path: ':npsn(\\d+)?',
						component: RouterView,
						children: [
							{
								path: 'classes',
								name: 'classes',
								component: RouterView,
								children: [
									{
										path: '',
										name: 'classes-index',
										component: () => import('@/pages/classes/index.vue'),
									},
									{
										path: 'students',
										name: 'students',
										component: RouterView,
										children: [
											{
												path: '',
												name: 'students-index',
												component: () =>import('@/pages/students/index.vue'),
											},
										],
									},
								],
							},
							{
								path: 'teachers',
								name: 'teachers',
								component: RouterView,
								children: [
									{
										path: '',
										name: 'teachers-index',
										component: () => import('@/pages/teachers/index.vue'),
									},
								],
							},
							{
								path: 'admins',
								name: 'admins',
								component: RouterView,
								children: [
									{
										path: '',
										name: 'admins-index',
										component: () => import('@/pages/admins/index.vue'),
									},
								],
							},
							{
								path: 'school-years',
								name: 'school-years',
								component: RouterView,
								children: [
									{
										path: '',
										name: 'school-years-index',
										component: () => import('@/pages/school-years/index.vue'),
									},
								],
							},
							{
								path: 'courses',
								name: 'courses',
								component: RouterView,
								children: [
									{
										path: '',
										name: 'courses-index',
										component: () => import('@/pages/courses/index.vue'),
									},
								],
							},
							{
								path: 'schedules',
								name: 'schedules',
								component: RouterView,
								children: [
									{
										path: '',
										name: 'schedules-index',
										component: () => import('@/pages/schedules/index.vue'),
									},
								],
							},
						],
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
	auth(to, from, next)
})

export default router
