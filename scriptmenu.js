let vMenu = document.querySelector(".visible-menu"),
  burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  vMenu.classList.toggle("active");
  burger.classList.toggle("active");
});

