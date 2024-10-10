const menu = document.querySelector(".menu");
const nav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".nav_link");

menu.addEventListener("click", () => nav.classList.toggle("close"));