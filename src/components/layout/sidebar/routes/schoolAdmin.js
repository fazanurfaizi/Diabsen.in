import store from "@/store"

export const schoolAdminRoutes = [
	{
		title: 'Sekolah',
		icon: 'school-building',
		items: [
			{
				name: 'Sekolah',
				icon: 'school-building',
				path: 'academic-year-list',
			},
			{
				name: 'Kelas',
				icon: 'school-building',
				child: [
					{
						title: 'Daftar Kelas',
						path: 'academic-year-list',
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
								npsn: store.getters['userable/getUserable'].school.npsn
							}
						},
					},
					{
						title: 'Tambah Guru',
						path: {
							name: 'user-create'
						},
					},
				],
			},
			{
				name: 'Siswa',
				icon: 'users',
				child: [
					{
						title: 'Daftar Siswa',
						path: 'user-list',
					},
					{
						title: 'Tambah Siswa',
						path: 'user-create',
					},
				],
			},
			{
				name: 'Orang Tua',
				icon: 'users',
				child: [
					{
						title: 'Daftar Orang Tua',
						path: 'user-list',
					},
					{
						title: 'Tambah Orang Tua',
						path: 'user-create',
					},
				],
			},
			{
				name: 'Admin',
				icon: 'users',
				child: [
					{
						title: 'Daftar Admin',
						path: 'user-list',
					},
					{
						title: 'Tambah Admin',
						path: 'user-create',
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
						path: 'academic-year-list',
					},
					{
						title: 'Tambah Tahun Ajaran',
						path: 'academic-year-create',
					},
				],
			},
			{
				name: 'Mata Pelajaran',
				icon: 'calendar',
				child: [
					{
						title: 'Daftar Mata Pelajaran',
						path: 'academic-year-list',
					},
					{
						title: 'Tambah Mata Pelajaran',
						path: 'academic-year-create',
					},
				],
			},
			{
				name: 'Jadwal Pelajaran',
				icon: 'calendar',
				child: [
					{
						title: 'Daftar Jadwal Pelajaran',
						path: 'academic-year-list',
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
