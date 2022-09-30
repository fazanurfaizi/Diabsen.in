export const appRoutes = [    
    {
        title: 'Pengelolaan',
        icon: 'play',
        items: [            
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
            },
            {
                name: 'FooBar',
                icon: 'lock-open',                
                child: [
                    {
                        title: 'Daftar Foobar',
                        path: 'foobar-list'
                    },
                    {
                        title: 'Tambah Foobar',
                        path: 'foobar-create'
                    },
                    {
                        title: 'Ubah Foobar',
                        path: 'foobar-edit'
                    },
                ]
            }
        ]   
    },     
]