document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("responsive");
    });

    // Set current year dynamically
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Set last modified date dynamically
    document.getElementById('lastModified').textContent = 'Last Update: ' + document.lastModified;
});

