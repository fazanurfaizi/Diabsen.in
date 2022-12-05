const menu = [
	{
		name: 'Beranda',
		icon: 'home',
		path: '/dashboard',
	},
	{
		title: 'Pengelolaan',
		items: [
			{
				name: 'Sekolah',
				icon: 'school',
				path: '#',
				child: [
					{
						name: 'List',
						path: { name: 'schools' },
					},
					{
						name: 'Tambah',
						path: { name: 'schools.create' },
					},
				],
			},
		],
	},
]

export default menu
