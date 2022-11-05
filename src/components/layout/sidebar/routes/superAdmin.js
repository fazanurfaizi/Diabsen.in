export const superAdminRoutes = [    
    {
        title: 'Pengelolaan',
        icon: 'play',
        items: [                        
            {
                name: 'Tahun Ajaran',
                icon: 'calendar',                
                child: [
                    {
                        title: 'Daftar Tahun Ajaran',
                        path: 'academic-year-list'
                    },
                    {
                        title: 'Tambah Tahun Ajaran',
                        path: 'academic-year-create'
                    },
                ]
            },
            {
                name: 'Gedung',
                icon: 'users',                
                child: [
                    {
                        title: 'Daftar Pengguna',
                        path: 'user-list'
                    },
                    {
                        title: 'Tambah Pengguna',
                        path: 'user-create'
                    },
                ]
            },
        ]   
    },
    {
        title: 'Sekolah',
        icon: 'building-library',
        items: [            
            {
                name: 'Kelas',
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
                name: 'Tahun Ajaran',
                icon: 'calendar',                
                child: [
                    {
                        title: 'Daftar Tahun Ajaran',
                        path: 'academic-year-list'
                    },
                    {
                        title: 'Tambah Tahun Ajaran',
                        path: 'academic-year-create'
                    },
                ]
            },
            {
                name: 'Pengguna',
                icon: 'users',                
                child: [
                    {
                        title: 'Daftar Pengguna',
                        path: 'user-list'
                    },
                    {
                        title: 'Tambah Pengguna',
                        path: 'user-create'
                    },
                ]
            },
        ]   
    }     
]