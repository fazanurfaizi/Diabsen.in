export const appRoutes = [    
    {
        title: 'Pengelolaan',
        icon: 'play',
        items: [
            {
                name: 'Sekolah',
                icon: 'building-library',
                path: 'school-list'
            },
            {
                name: 'Sekolah',
                icon: 'building-library',                
                child: [
                    {
                        title: 'Daftar Sekolah',
                        path: 'school-list'
                    },
                    {
                        title: 'Tambah Sekolah',
                        path: 'school-create'
                    },
                ]
            }
        ]   
    },     
]