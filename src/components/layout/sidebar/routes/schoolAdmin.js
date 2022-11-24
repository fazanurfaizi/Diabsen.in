import store from "@/store"

const currentNpsn = store.getters['userable/getUserable'].school.npsn

export const schoolAdminRoutes = [
	{
		title: 'Sekolah',
		icon: 'school-building',
		items: [
			{
				name: 'Sekolah',
				icon: 'school-building',
				path: {
					name: 'school-detail',
					params: {
						npsn: currentNpsn
					}
				},
			},
			{
				name: 'Kelas',
				icon: 'academic-cap',
				child: [
					{
						title: 'Daftar Kelas',
						path: {
							name: 'school-classes-index',
							params: {
								npsn: currentNpsn
							}
						},
					},
					{
						title: 'Tambah Kelas',
						path: 'academic-year-create',
					},
				],
			},
		],
	},
	{
		title: 'Pengelolaan',
		icon: 'play',
		items: [
			{
				name: 'Guru',
				icon: 'users',
				child: [
					{
						title: 'Daftar Guru',
						path: {
							name: 'teachers-index',
							params: {
								npsn: currentNpsn
							}
						},
					},
					{
						title: 'Tambah Guru',
						path: {
							name: 'dashboard'
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
				name: 'Admin',
				icon: 'user-group',
				child: [
					{
						title: 'Daftar Admin',
						path: {
							name: 'admins-index',
							params: {
								npsn: currentNpsn
							}
						},
					},
					{
						title: 'Tambah Admin',
						path: 'admins-create',
					},
				],
			},
		],
	},
	{
		title: 'Akademik',
		icon: 'school-building',
		items: [
			{
				name: 'Tahun Ajaran',
				icon: 'calendar',
				child: [
					{
						title: 'Daftar Tahun Ajaran',
						path: {
							name: 'school-years-index',
							params: {
								npsn: currentNpsn
							}
						},
					},
					{
						title: 'Tambah Tahun Ajaran',
						path: 'academic-year-create',
					},
				],
			},
			{
				name: 'Mata Pelajaran',
				icon: 'book-open',
				child: [
					{
						title: 'Daftar Mata Pelajaran',
						path: {
							name: 'courses-index',
							params: {
								npsn: currentNpsn
							}
						},
					},
					{
						title: 'Tambah Mata Pelajaran',
						path: 'academic-year-create',
					},
				],
			},
			{
				name: 'Jadwal Pelajaran',
				icon: 'calendar-days',
				child: [
					{
						title: 'Daftar Jadwal Pelajaran',
						path: {
							name: 'schedules-index',
							params: {
								npsn: currentNpsn
							}
						},
					},
					{
						title: 'Tambah Jadwal Pelajaran',
						path: 'academic-year-create',
					},
				],
			},
		],
	},
]
