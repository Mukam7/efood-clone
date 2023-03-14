window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  if (window.scrollY > 0) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
}
document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
