const cards = document.querySelectorAll(".card") ;

var flippedStatus= false

// cards.forEach( card => {
//     card.addEventListener('click', (e) => {
//         e.currentTarget.classList.toggle('flip');
//         console.log(e.currentTarget.id);
//         console.log(e.currentTarget.classList)
//     });
// });

console.log(cards)
console.log(cards[0])
console.log(cards[1])

let firstCard = true
let firstCardId = ""
let firstCardClass = ""
let currentCardId = ""
let currentCardClass =""

cards.forEach( card => {
    card.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('flip');
        currentCardId= e.currentTarget.id;
        currentCardClass= e.currentTarget.classList;
        console.log("firstcard = " + firstCard);
        if (firstCard==true) {
            // flip
            firstCardId = e.currentTarget.id;
            console.log(firstCardId)
            firstCardClass = e.currentTarget.classList;
            console.log(firstCardClass)
            console.log("e.currentTarget= " + e.target)
            firstCard = false;
            console.log("firstcard = " + firstCard)
        }

        else if (firstCard==false) {
            // console.log(currentCardId);
            // console.log(firstCardId);
            // console.log(firstCardClass);
            if (currentCardId==firstCardId) {
                console.log("currentCardId==firstCardId")
                //flip
                    if (currentCardClass== firstCardClass) {
                        console.log("same card");
                    }
                    else if (currentCardClass!= firstCardClass) {
                        console.log("we have a pair");
                        setTimeout(() => {
                        cards.forEach(element => {
                            console.log(element.id);
                            if (element.id==firstCardId) {
                                console.log("eureka")
                                element.classList.toggle('card-paired');
                            }
                            // else {
                            //     console.log("ignored");
                            // }
                         });
                        },1000);
                        // for each card in the nodelist of cards {
                        //     check whether the id is a match for the current id
                        //         if match classList.toggle('card-paired')
                        //         else
                        // }

                        //e.currentTarget.classList.toggle('card-paired');
                        firstCard=true;
                    }
            }
            else if (currentCardId!==firstCardId) {
                //console.log("currentCardId!=firstCardId");
                console.log("not the right card");
                firstCard=false;
                setTimeout(() => {
                    cards.forEach(element => {
                        console.log(element.className);
                        if (element.classList==firstCardClass || element.classList==currentCardClass) {
                            console.log("eureka")
                            element.classList.toggle('flip');
                        }
                        // else {
                        //     console.log("ignored");
                        // }
                     });
                    },1000);
            }
        }

    });
});






// card.addEventListener('click', (event) => {
//     console.log(event.currentTarget)
//     console.log(event.currentTarget.id) //event.target.id doesn't work, only current target works
//     //console.log(event.target.classList)
//     // console.log(event.target.innerHTML)
//     //card.style.visibility = "hidden";
//     if (flippedStatus == false) {
//         cardInner.classList.toggle("card-number-1--flipped")
//         //cardInner.style.cssText = "transform: rotateY(180deg)";
//         console.log("flippedStatus has been recognised as true");
//         flippedStatus= true;
//     } else if (flippedStatus == true) {
//         //cardInner.style.transform= null; 
//         cardInner.classList.toggle("card-number-1--flipped");
//         console.log("flippedStatus has been recognised as false");
//         flippedStatus= false;
//     } 
// });


// var firstCard = true


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