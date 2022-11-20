export const superAdminRoutes = [
	{
		title: 'Sekolah',
		icon: 'building-library',
		items: [
			{
				name: 'Sekolah',
				icon: 'building-library',
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
