export const superAdminRoutes = [
	{
		title: 'Sekolah',
		icon: 'school-building',
		items: [
			{
				name: 'Sekolah',
				icon: 'school-building',
				child: [
					{
						title: 'Daftar Sekolah',
						path: 'school-list',
					},
					{
						title: 'Tambah Sekolah',
						path: 'school-create',
					},
				],
			},
		],
	},
]
