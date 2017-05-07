
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function (){   //tells user if they got a match
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	  } else {
		alert("Sorry, try again.");
	  }

};

var flipCard = function (cardId) { //tells user card they flipped
	console.log("User flipped " + cards[cardId]) 
    cardsInPlay.push(cards[cardId]) //adds flipped card to array

	if (cardsInPlay.length === 2) 

	checkForMatch();	
}; 

flipCard(0);
flipCard(2);