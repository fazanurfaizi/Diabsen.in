import store from '@/store'

const currentNpsn = store.getters['userable/getUserable'].school.npsn

export const schoolAdminRoutes = [
	{
		title: 'sidebar.schools',
		icon: 'school-building',
		items: [
			{
				name: 'menus.schools.detail',
				icon: 'school-building',
				path: {
					name: 'school-detail',
					params: {
						npsn: currentNpsn,
					},
				},
			},
			{
				name: 'sidebar.classes',
				icon: 'academic-cap',
				child: [
					{
						title: 'menus.classes.index',
						path: {
							name: 'school-classes-index',
							params: {
								npsn: currentNpsn,
							},
						},
					},
					{
						title: 'menus.classes.create',
						path: 'academic-year-create',
					},
				],
			},
		],
	},
	{
		title: 'sidebar.management',
		icon: 'play',
		items: [
			{
				name: 'sidebar.teachers',
				icon: 'users',
				child: [
					{
						title: 'menus.teachers.index',
						path: {
							name: 'teachers-index',
							params: {
								npsn: currentNpsn,
							},
						},
					},
					{
						title: 'menus.teachers.create',
						path: {
							name: 'dashboard',
						},
					},
				],
			},
			// {
			// 	name: 'Siswa',
			// 	icon: 'users',
			// 	child: [
			// 		{
			// 			title: 'Daftar Siswa',
			// 			path: {
			// 				name: 'students-index',
			// 				params: {
			// 					npsn: currentNpsn
			// 				}
			// 			},
			// 		},
			// 		{
			// 			title: 'Tambah Siswa',
			// 			path: 'dashboard',
			// 		},
			// 	],
			// },
			// {
			// 	name: 'Orang Tua',
			// 	icon: 'users',
			// 	child: [
			// 		{
			// 			title: 'Daftar Orang Tua',
			// 			path: 'user-list',
			// 		},
			// 		{
			// 			title: 'Tambah Orang Tua',
			// 			path: 'dashboard',
			// 		},
			// 	],
			// },
			{
				name: 'sidebar.admins',
				icon: 'user-group',
				child: [
					{
						title: 'menus.admins.index',
						path: {
							name: 'admins-index',
							params: {
								npsn: currentNpsn,
							},
						},
					},
					{
						title: 'menus.admins.create',
						path: 'admins-create',
					},
				],
			},
		],
	},
	{
		title: 'sidebar.academic',
		icon: 'school-building',
		items: [
			{
				name: 'sidebar.schoolYears',
				icon: 'calendar',
				child: [
					{
						title: 'menus.schoolYears.index',
						path: {
							name: 'school-years-index',
							params: {
								npsn: currentNpsn,
							},
						},
					},
					{
						title: 'menus.schoolYears.create',
						path: 'academic-year-create',
					},
				],
			},
			{
				name: 'sidebar.courses',
				icon: 'book-open',
				child: [
					{
						title: 'menus.courses.index',
						path: {
							name: 'courses-index',
							params: {
								npsn: currentNpsn,
							},
						},
					},
					{
						title: 'menus.courses.create',
						path: 'academic-year-create',
					},
				],
			},
			{
				name: 'sidebar.schedules',
				icon: 'calendar-days',
				child: [
					{
						title: 'menus.schedules.index',
						path: {
							name: 'schedules-index',
							params: {
								npsn: currentNpsn,
							},
						},
					},
					{
						title: 'menus.schedules.create',
						path: 'academic-year-create',
					},
				],
			},
		],
	},
]
