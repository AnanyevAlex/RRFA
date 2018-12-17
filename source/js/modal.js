var modal = document.querySelector(".modal-order");
var introBtnOpen = document.querySelector(".intro__btn-order");
var closeBlock = document.querySelector(".modal-order__block");
var closeBtn = document.querySelector(".modal-order__btn-close");
var bot

introBtnOpen.addEventListener('click', function () {
  closeBlock.classList.add("modal-order__block--show");
  modal.classList.add("modal-order--show");
});

closeBtn.addEventListener('click', function () {
  closeBlock.classList.remove("modal-order__block--show");
  modal.classList.remove("modal-order--show");
});

