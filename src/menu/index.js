const menu = [
    {
        name: "Beranda",
        icon: "home",
        path: "/dashboard"
    },
    {
        title: "Pengelolaan",
        items: [
            {
                name: "Sekolah",
                icon: "school",
                path: "/schools",
            },
            {
                name: "Foobar",
                icon: "protect-user",
                path: "#",
                child: [
                    {
                        name: "Foobar List",
                        path: "/foobar/list"
                    },
                    {
                        name: "Foobar Create",
                        path: "/foobar/create"
                    },
                ]
            },
            {
                name: "Menu",
                icon: "protect-user",
                path: "/forgot-password",
            }
        ]
    },
    {
        title: "Kategori",
        items: [
            {
                name: "Menu",
                icon: "protect-user",
                path: "#",
                child: [
                    {
                        name: "Sub Menu",
                        path: "#"
                    },
                    {
                        name: "Sub Menu",
                        path: "#"
                    },
                    {
                        name: "Sub Menu",
                        path: "#"
                    },
                ]
            },
            {
                name: "Menu",
                icon: "menu",
                path: "#",
            }
        ]
    },
    {
        title: "Kategori",
        items: [
            {
                name: "Menu",
                icon: "protect-user",
                path: "#",
                child: [
                    {
                        name: "Sub Menu",
                        path: "#"
                    },
                    {
                        name: "Sub Menu",
                        path: "#"
                    },
                    {
                        name: "Sub Menu",
                        path: "#"
                    },
                ]
            },
            {
                name: "Menu",
                icon: "menu",
                path: "#",
            }
        ]
    }
]

export default menu;