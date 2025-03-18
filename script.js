
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");
    const menuLinks = document.querySelectorAll("nav ul li a");

    // Función para abrir y cerrar el menú
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Cerrar el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    // 🔹 Asegurar que el menú esté oculto al inicio
    menu.classList.remove("active");
});
