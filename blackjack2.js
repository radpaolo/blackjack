/*
GAME SETUP
Create Player
Create Dealer
Create Deck
Deal two cards from Deck to Player + Dealer
*/

//PLAYER PLAYING
//display hand and current sum of Player hand

//if Player hits

//add value of new card to Player hand

//if < 21, may hit again or stay

//if new hand value > 21 console.log (DEALER WINS), go to GAME OVER

//Player stays, goes to DEALER PLAYING






class Card{
  constructor(rank, suit, value){
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
}

class Player{
  constructor(name){
    this.name = name;
    this.hand = [];
  }
}

class Dealer{
  constructor(name){
  this.name = name;
  this.hand = [];
}
}



//DECK CONSTRUCTION/SHUFFLE/DEAL
function getDeck(){
  var deck = [];
  var suits =["hearts", "diamonds", "clubs", "spades"];
  var ranks = ["2", "3", "4", "5", "6", "7", "8","9","10", "J", "Q", "K", "A"];
  var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
  for (var i = 0; i < suits.length; i++){
  for (var x = 0; x < ranks.length; x++){
    var card = new Card (ranks[x], suits[i], value[x]);
    deck.push(card);
  }
  }
  return deck;
}

function shuffleDeck(deck){
  for (var i = 0; i < 1000; i++) {
    var location1 = Math.floor ((Math.random () * deck.length));
    var location2 = Math.floor ((Math.random () * deck.length));
    var temp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = temp;
  }
  return deck;
}

//Card Deal + Hit
function cardDeal(deck, person){
  var holdCard = deck.splice(0, 1)[0];
  person.hand.push(holdCard);
}

function checkSum(hand){
  //var acting as a container for the stuff that spits out of the for loop
  var handSum = 0;
  //this is the definition of the for loop
  for (i = 0; i < hand.length; i++){
    //the code loop that runs, in this case, the index of the value of hand
    var addValue = hand[i].value;
    //add up the value of addValue to handSum
    handSum = addValue + handSum;
  }
  //spitting out the value of handSum (with the addValue for loop results)
  return handSum;
}

/*PLAYER PLAYING
current sum of Player hand
if Player hits
add value of new card to Player hand
if < 21, may hit again or stay
if new hand value > 21 console.log (DEALER WINS), go to GAME OVER
Player stays, goes to DEALER PLAYING
*/

/*DEALER PLAYING
current sum of Dealer hand
if Dealer < 16 Dealer hit
if Dealer > 16 Dealer stays, goes to COMPARE SCORES
add value of new card to Dealer hand
if new hand value > 21 console.log (PLAYER WINS), go to GAME OVER
Dealer stays, goes to COMPARE SCORES
*/

//BUST - if the array sum > 21 go to GAME OVER
function doesBust(player, dealer){

}

/*COMPARE SCORES
if array sum of player > dealer but < 21 console.log (PLAYER WINS);
if array sum of dealer > player but < 21 console.log (DEALER WINS);

GAME OVER
play again?

if yes, go back to START GAME
if no, thanks for playing!
*/



function main(){
var rl = require("readline");
var prompt = rl.createInterface(process.stdin, process.stdout);
var tiffany = new Player("Tiffany");
var deck = getDeck();
deck = shuffleDeck(deck);
var dealer = new Dealer("Dealer");

cardDeal(deck, tiffany);
cardDeal(deck, tiffany);
cardDeal(deck, dealer);
cardDeal(deck, dealer);
//start Player loop here
while (){
//spit out current hand
console.log(tiffany.hand);
//spit out the check sum
console.log("You have " + checkSum(tiffany.hand));

var firstHand = checkSum(tiffany.hand);
if (firstHand === 21){
  console.log("You win!");
  return;
} else if (firstHand < 21) {
  prompt.question("Would you like to hit?", function (playerAnswer) {
    if (playerAnswer === "yes") {
      cardDeal(deck, tiffany);
      console.log(tiffany.hand);
      console.log("You have " + checkSum(tiffany.hand));
    }
  })

} else if (firstHand > 21) {
  console.log("You busted, you lose!");
  return;
}



}

//console.log(dealer.hand);
//console.log ("The Dealer has " + checkSum(dealer.hand));


}

main();
