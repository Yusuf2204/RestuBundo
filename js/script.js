// toggle class activate
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("activate");
};

// klik diluar sidebar untuk hilangkan side menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("activate");
  }
});
