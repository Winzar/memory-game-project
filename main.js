const card = document.querySelector(".front-face")

console.log(card)

card.addEventListener('click', () => {
    console.log("I work")
    card.style.visibility = "hidden";

});

