var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    // menu.style.display="none";
  } else {
    menu.classList.add("showMenu");
    // menu.style.display="block";
  }
}

var menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleMenu);
});
