const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const button = $("button");
const bg = $("#bg");
const modal = $("#modal");
const buttonClose = $(".title h2");

button.addEventListener("click", function (e) {
  modal.classList.toggle("active");
  bg.classList.toggle("active");
});

buttonClose.addEventListener("click", function (e) {
  modal.classList.toggle("active");
  bg.classList.toggle("active");
});

bg.addEventListener("click", function (e) {
  modal.classList.toggle("active");
  bg.classList.toggle("active");
});
