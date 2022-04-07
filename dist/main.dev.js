"use strict";

// const card = document.querySelectorAll(".flip-card") ;
var card = document.querySelector(".card-number-1");
var cardInner = document.querySelector(".flip-card-inner"); // console.log(card)

var flippedStatus = false; //for each
//Function that removes the card from display + no longer interactable

card.addEventListener('click', function (event) {
  console.log(event.currentTarget); //card.style.visibility = "hidden";

  if (flippedStatus == false) {
    cardInner.classList.toggle("card-number-1--flipped"); //cardInner.style.cssText = "transform: rotateY(180deg)";

    console.log("flippedStatus has been recognised as true");
    flippedStatus = true;
  } else if (flippedStatus == true) {
    //cardInner.style.transform= null; 
    card.classList.toggle("card-number-1--flipped");
    console.log("flippedStatus has been recognised as false");
    flippedStatus = false;
  }
}); // cardInner.style.transform= null; 
// Function that removes the card from display + no longer interactable
// card.addEventListener('click', () => {
//     console.log("I work")
//     card.style.visibility = "hidden";
// });
// setTimeout(() => {
//     console.log("command removed")
//     //cardInner.style.removeProperty = "transform";   
//     cardInner.style.cssText = "transform: rotateY(180deg)"; 
// }, 2000);