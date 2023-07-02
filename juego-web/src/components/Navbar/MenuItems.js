
export const MenuItems = [
    {
        title: 'Inicio',
        url: '/home-page',
        cName: 'nav-links',
        icon: "fa-solid fa-house"
    },
    {
        title: 'Nosotros',
        url: '/about-us',
        cName: 'nav-links',
        icon: "fa-solid fa-user-group"
    },
    {
        title: 'Instrucciones',
        url: '/instructions',
        cName: 'nav-links',
        icon: "fa-solid fa-book"
    },
    {
        title: 'Iniciar Sesión',
        url: '/login-sign-in',
        cName: 'nav-links',
    },
    {
        title: 'Cerrar Sesión',
        url: '/home-page',
        cName: 'nav-links', // Actualiza la clase CSS según tus necesidades
        condition: isAuthenticated // Agrega la condición de autenticación
    }
]