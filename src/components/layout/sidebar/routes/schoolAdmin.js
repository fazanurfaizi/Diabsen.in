export const schoolAdminRoutes = [
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
						path: 'user-list',
					},
					{
						title: 'Tambah Guru',
						path: 'user-create',
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
		title: 'Sekolah',
		icon: 'building-library',
		items: [
			{
				name: 'Sekolah',
				icon: 'building-library',
				path: 'academic-year-list',
			},
			{
				name: 'Kelas',
				icon: 'building-library',
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
			{
				name: 'Gedung',
				icon: 'building-library',
				child: [
					{
						title: 'Daftar Gedung',
						path: 'academic-year-list',
					},
					{
						title: 'Tambah Gedung',
						path: 'academic-year-create',
					},
				],
			},
		],
	},
	{
		title: 'Akademik',
		icon: 'building-library',
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
				name: 'Kalendar Pendidikan',
				icon: 'calendar',
				path: 'academic-year-list',
			},
		],
	},
]
