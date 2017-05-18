
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"

	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function (){   //tells user if they got a match
	if (cardsInPlay[0] === cardsInPlay[1]) {
		$('#winModal').modal('show');
	  } else {
		$("#loseModal").modal("show");
	  }

};

var flipCard = function () { //tells user card they flipped
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

    cardsInPlay.push(cards[cardId].rank); //adds flipped card to array
    
    this.setAttribute("src", cards[cardId].cardImage);

    if (cardsInPlay.length === 2) 

	checkForMatch();
}; 

//unit 11  adds cards to board
var createBoard = function (){
	for (var i = 0; i < cards.length; i++) {
	
	var cardElement = document.createElement("img");
	cardElement.setAttribute("src", "images/back.png");	
	cardElement.setAttribute("data-id", i);
	cardElement.addEventListener("click", flipCard);
	document.getElementById("game-board").appendChild(cardElement)
	}
};

	//var boardReset = function () {
		//if (i === card.length)
		//createBoard ();
	//};

//reset.addEventListener ("click", boardReset);

createBoard ();


