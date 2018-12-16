var linkone = document.querySelector(".stock__item-btn--friends");
var conditionone = document.querySelector(".stock__conditions--friend");

var linktwo = document.querySelector(".stock__item-btn--opt");
var conditiontwo = document.querySelector(".stock__conditions--opt");

var linkthree = document.querySelector(".stock__item-btn--repost");
var conditionthree = document.querySelector(".stock__conditions--repost");

linkone.addEventListener("click", function(evt) {
  evt.preventDefault ();
  conditionone.classList.toggle("stock__conditions--hidden");
});

linktwo.addEventListener("click", function(evt) {
  evt.preventDefault ();
  conditiontwo.classList.toggle("stock__conditions--hidden");
  arrdate.focus();
});

linkthree.addEventListener("click", function(evt) {
  evt.preventDefault ();
  conditionthree.classList.toggle("stock__conditions--hidden");
  arrdate.focus();
});
