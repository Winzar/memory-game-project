"use strict";

var card = document.querySelector(".front-face");
console.log(card);
card.addEventListener('click', function () {
  console.log("I work");
  card.style.visibility = "hidden";
});