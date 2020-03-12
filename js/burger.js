window.addEventListener("load", function() {
  initBurgerMenu();
});

function initBurgerMenu() {
  let btn = document.querySelector("a.burger-btn");
  let menu = document.querySelector("nav.main-navigation");

  btn.addEventListener("click", function() {
    menu.classList.toggle("active");
    btn.classList.toggle("active");
    return false;
  });
}
