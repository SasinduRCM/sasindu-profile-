const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

  var typed = new Typed(".type", {
    strings: ["Programmer.", "Web Developer.", "Front-End Developer.","Back-End Developer.","Freelancer"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });

