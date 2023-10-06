function cerrarNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    }
}
document.addEventListener('click', cerrarNavbar);