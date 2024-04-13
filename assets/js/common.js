var backdrop = document.querySelector(".backdrop");
var toggleButton2 = document.querySelector("#toggle-mobile-nav2");
var mobileNav = document.querySelector("#menu");

toggleButton2 ? toggleButton2.addEventListener("click", openMobileNev) : "";

function openMobileNev() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
}

backdrop.addEventListener("click", closeMobileNav);

function closeMobileNav() {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
}