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
    cardInner.classList.toggle("card-number-1--flipped");
    console.log("flippedStatus has been recognised as false");
    flippedStatus = false;
  }
}); // var firstCard = true
// card.forEach(element => {
//     element.addEventListener('click', () => {
//     var currentCardId = get current card id
//     // need to have some form of match indicator here?
//         if (firstCard==true) {
//             cardInner.classList.toggle("card-number---flipped")
//             var firstCardId = get element id
//             // https://stackoverflow.com/questions/4825295/onclick-to-get-the-id-of-the-clicked-button
//             firstCard==false 
//         }
//         else if (firstCard==false) {
//             if (currentCardId==firstCardId) {
//                 cardInner.classList.toggle("card-number---flipped")
//                 setTimeout(1000)
//                 //.style.visibility = "hidden";
//                 firstCard==true
//             }
//             else if (currentCardId==firstCardId)
//                 cardInner.classList.toggle
//                 setTimeout(1000)    
//                 cardInner.classList.toggle
//                 console.log("same card clicked")
//                 firstCard==true
//         }
//     })
// })
// cardInner.style.transform= null; 
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