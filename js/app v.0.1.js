/* 
* Author: Moamen ali
* Mail: moamen.ux@gmail.com
* Start date: 01 May
* End date:
*/


/* *** *** *** *** *** DECLARATIONS *** *** *** *** *** */

//element which contains all cards
	//const deck = deocument.querySelector('.deck');

/* nodelist of all cards */
//const card = deocument.querySelector('.card');

var openCards 	= []; //only two cards can be open at once!
let moveCounter = 0; //calc the sum of moves in this round of the game!
let ratingStar 	= 0;
let clicks		= 0;
cardList = cardInit(); /*shuffle*/
//ADD CARD LIST  
var shuffleOnce = shuffle(cardList)
displayCards();
//add event listeners 
//fire
$(".card").on('click', function(){
fireMatch(this);
});// 'add click event', 'c');

/* *** *** *** *** *** FUNCTIONS *** *** *** *** *** */
function cardInit(){
	//logig to init card
	let domcards  	= [];
	domcards 		= document.getElementsByClassName("card");

		return transform(domcards)
	}
//End
//-----------------------------
function transform(obj){
	//make the cardList as an array not object
	var mapped = [];
	for(var key in obj){
		if (obj.hasOwnProperty(key)){
			mapped.push(obj[key].innerHTML);
		}
	}
	return mapped;
}
//End

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//End
//--------------------------------

function displayCards(){
	cardsFactory();
	replacer();
}	//logic displayCards from dom
//--------------------------------

function replacer(list){
	document.getElementsByClassName("deck")[0].innerHTML = list.innerHTML;
}//END

//--------------------------------
function cardsFactory(){
	var list = document.createElement("ul");
	for(var i = 0 ; i < shuffle.length; i++){
		var li = document.createElement("li");
		li.innerHTML = shuffleOnce[i];
		li.classList.add("card");
		list.appendChild(li);
	}//End for

// window.onload = function replace(){
// document.getElementById('hello').innerHTML = 'hi';
// };
}
//End
//--------------------------------

function fireMatch(card){
	displaySymbol(card);
	markedOped(card);
}
//End
//--------------------------------

function displaySymbol(card){

}
//End
//--------------------------------

function markedOped(card){

}
//End


/* *** *** SHUFFLE *** *** */


/* *** *** CREATE DECK *** *** */
/* *** *** FLIP CARD *** *** */
/* *** *** MATCH & UNMATCH COMPARISON *** *** */

/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
