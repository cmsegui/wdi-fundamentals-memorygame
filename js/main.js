var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = "queen";
var cardTwo = "king";

cardsInPlay.push("cardOne");
console.log("User flipped queen")

cardsInPlay.push("cardTwo");
console.log("User flipped king");
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

	