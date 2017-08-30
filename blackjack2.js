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

//start Player loop here THIS NEEDS TO GO UNTIL PLAYER SAYS NO THEN GO TO DEALER PLAYS CODE
//The playerAnswer seems to be a local variable and outside of the global scope,
//and can't have "playerAnswer === no" as the condition to let the Player while loop end?

var playerInput = "yes";

while (playerInput === "yes"){
//spit out current hand
console.log(tiffany.hand);
//spit out the check sum
console.log("You have " + checkSum(tiffany.hand));
//in order to start up the player hit/stay gameplay loop
//var firsthand is the check sum of the current hand
var playerHand = checkSum(tiffany.hand);
// if else statement of the sum of the current hand, if equal to 21 prints you win
if (playerHand === 21){
  console.log("You win!");
  //return tells program to run it back to the beginning kill this code
  return;
  //else if statement if the hand is less than 21
} else if (playerHand < 21) {
  //this prompt question into it's own if/else
  prompt.question("Would you like to hit?", function (playerAnswer) {
    playerInput = playerAnswer;
    if (playerAnswer === "yes") {
      //fire the cardDeal function into the deck
      cardDeal(deck, tiffany);
      //
      console.log(tiffany.hand);
      console.log("You have " + checkSum(tiffany.hand));
    } else if (playerAnswer === "no"){
//not sure what to type from here to kill loop, move to Dealer?
    } else {
      console.log ("wait, what are you trying to do?");
    }
  });
//if the hand is over 21, prints you lose and tells the code to kill and return to start
} else (playerHand > 21) {
  console.log("You busted, you lose!");
  return;
}

//Not sure if the doesBust function would still be relevant in this case if it's
//just console printing the same "you lose" message when hand > 21 then returning?

//Not sure if once the Player loop ends, it'll automatically go to DEALER PLAYS?

//DEALER PLAYS
//additional while loop for Dealer as well
//conditional for the while loop to continue/stop?

/*
var dealerResult = (dealerHand <= 16);
while (dealerHand <= 16)){
console.log(dealer.hand);
//spit out the check sum
console.log("The Dealer has " + checkSum(dealer.hand));
var dealerHand = checkSum(dealer.hand);
if (dealerHand === 21) {
  console.log("The Dealer wins!");
  return;
} else if (dealerHand <= 16) {
dealerResult = dealerHand;
  cardDeal(deck, dealer);
    if (dealerHand > 21) {
      console.log("The Dealer has " + dealer.hand);
      console.log("The Dealer busts! You win!");
      return;
    } else (dealerHand < 21){
      console.log("The Dealer has " + dealer.hand);
    } else (dealerHand > 21){
    console.log("The Dealer busts! You win!");
    return;
  }
}
}

//COMPARING SCORES
console.log("You have " + playerHand " and The Dealer has " + dealerHand);
if (dealerHand > playerHand){
  console.log("The Dealer wins!");{
    return;
    else (playerHand > dealerHand){
      console.log("You win!");
      return;
      else (playerhand === dealerHand){
        console.log("You both tied!");
        return;
      }
    }
  }
}
}
}



//THE DEALER HAS A SIMILAR GAMEPLAY LOOP BUT DOESN'T REQUIRE THE USER PROMPT
//DEALER SUM OF dealerHand
//STRAIGHT UP IF dealerHand === 21 wins
//ELSE IF dealerHand < 17 cardDeal
//ELSE IF dealerHand > 17 Stay
//ELSE IF dealerHand > 21 Dealer loses, console.log("Dealer busts, you win!")
//Return

//console.log(dealer.hand);
//console.log ("The Dealer has " + checkSum(dealer.hand));


//IF DEALER === PLAYER SUM console.log("tie!"), return
//IF DEALER > PLAYER SUM console.log ("dealer wins!"), return
//IF PLAYER > DEALER SUM console.log ("you win!"), return
*/
}

main();
