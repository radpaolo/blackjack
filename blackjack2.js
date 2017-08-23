/*
GAME SETUP
Create Player
Create Dealer
Create Deck
Deal two cards from Deck to Player + Dealer

class Card{
  constructor(rank, suit){
    this.rank = rank;
    this.suit = suit;
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

DECK CONSTRUCTION/SHUFFLE/DEAL
function getDeck(){
  var deck = [];
  var suits =["hearts", "diamonds", "clubs", "spades"];
  var ranks = ["2", "3", "4", "5", "6", "7", "8","9","10", "J", "Q", "K", "A"];
  for (var i = 0; i < suits.length; i++){
  for (var x = 0; x < ranks.length; x++){
    var card = new Card (ranks[x], suits[i]);
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

function cardDeal(deck, player, dealer){
  var holdCard = deck.splice(0, 1)[0];
  player.hand.push(holdCard);
  dealer.hand.push(holdCard);
}

PLAYER PLAYING
current sum of Player hand
if Player hits
add value of new card to Player hand
if < 21, may hit again or stay
if new hand value > 21 console.log (DEALER WINS), go to GAME OVER
Player stays, goes to DEALER PLAYING

DEALER PLAYING
current sum of Dealer hand
if Dealer < 16 Dealer hit
if Dealer > 16 Dealer stays, goes to COMPARE SCORES
add value of new card to Dealer hand
if new hand value > 21 console.log (PLAYER WINS), go to GAME OVER
Dealer stays, goes to COMPARE SCORES

HITS -
function cardHit(deck, player, dealer){
  var cardHit = deck.splice(0,1)[0];
  player.hand.push(cardHit);
  dealer.hand.push(cardHit);
}

BUST - if the array sum > 21 go to GAME OVER
function doesBust(player, dealer)



COMPARE SCORES
if array sum of player > dealer but < 21 console.log (PLAYER WINS);
if array sum of dealer > player but < 21 console.log (DEALER WINS);

GAME OVER
play again?

if yes, go back to START GAME
if no, thanks for playing!
*/
