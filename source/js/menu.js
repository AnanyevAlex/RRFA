var popup = document.querySelector(".main-nav__list");
var btnOpen = document.querySelector(".main-nav__btn-open");
var btnClose = document.querySelector(".main-nav__btn-close")
var delayInSec = 500;

btnOpen.addEventListener('click', function () {
  popup.classList.add("main-nav__list--open");
  setTimeout(function () {
    popup.classList.add("main-nav__list--opacity");
  }, delayInSec);
  btnOpen.classList.add("main-nav__btn-open--none");
  btnClose.classList.remove("main-nav__btn-close--none");
});

btnClose.addEventListener('click', function () {
  popup.classList.remove("main-nav__list--opacity");
  setTimeout(function () {
    popup.classList.remove("main-nav__list--open");
  }, delayInSec);
  btnOpen.classList.remove("main-nav__btn-open--none");
  btnClose.classList.add("main-nav__btn-close--none");
});
