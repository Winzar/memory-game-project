# Card Memory Game

## Table of contents

- [About](#about)
- [Code Explanation](#code-Explanation)
- [Errors](#errors)

## About

Code for my game MVP - Card Memory Game. Utilises CSS grid and functions by interaction between the html, JS and SCSS. By pressing the button it flips the cards allowing the user to try and memorise them. Once the user wants to attempt matching the cards they press the button again and begin matching.

## Code Explanation

Order of operations:

1. A true/false token registers if the first card is being selected or not. Initially first card is set to true and reset post pairing.
2. An arrow function adds the flip attribute to the card upon click, resulting in the card flipping using transform.
3. When a card is pressed the id of the card and the class of the card is taken and registered under 'CurrentCard'.
4. If it is the first card being selected the id and class of the card is taken and registered under 'FirstCard'.
5. First card is then set to false.
6. When a second card is clicked it checks if first card is false.
7. The id of the card ('CurrentCard') is then checked with the id of ('FirstCard'), if it matches then:

   - The class of the card is then checked and compared to prevent the same that was clicked first being recognised as its own pair.
   - If it is the same card nothing is changed.
   - If it isn't the same card then it is a pair. There is a brief delay - allowing the user to see the cards paired - before the cards are given the class attribute 'card-paired' and are removed because their display value has been set to none.
   - Values are reset for 'CurrentCard' and 'FirstCard'.

8. If the cards do not match then Card attribute flip is toggled and the cards are flipped back after a short delay. Values are reset for 'CurrentCard' and 'FirstCard'.

## Errors

The game begins to break if all the cards are selected rapidly - before the timeout function is finished.
