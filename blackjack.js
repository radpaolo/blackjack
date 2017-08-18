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

/*class Dealer{
  constructor(name){
  this.name = name;
  this.hand = [];
}
}

*/

//deck construction + shuffle
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

//card dealing out stuff
//pass in dealer function cardDeal (deck, player, dealer)
/*
OR create cardDeal function for dealer
function cardDeal(deck, dealer){
var holdCard = deck.splice(0, 1)[0];
dealer.hand.push(holdCard);
}
*/
function cardDeal(deck, player){
  //take a card from the top of the deck (there is one less card in the deck)
  var holdCard = deck.splice(0, 1)[0];
  //that card is passed to the player (the player has one card in their hand)
  player.hand.push(holdCard);
  //dealer.hand.push(holdCard);???
}

/*
Deal card two cards to player and Dealer
player decides to hit or stay
(else if or switch/case -- hit, if > 21 player busts, if < 21, hit or stay, if stay compare results w/ dealer)

dealer decides to hit or stay
(else if or switch/case  -- if dealer is < 16 dealer forced to hit, if < 21 busts)

player + dealer add card ranks
(compare player score to dealer)
if player goes above 21 player loses
if dealer goes above 21 player wins
if the player is closer to 21, the player wins
if the dealer is closer to 21, the dealer wins
if player and dealer go above 21, both lose

play again?
(push cards in player/dealer arrays back into deck, reshuffle deck)
function restart (deck, player, dealer)
redeal cards

*/

var deck = getDeck();
deck = shuffleDeck(deck);
var Tiffany = new Player(Tiffany);
//var Dealer = new Dealer(Dealer);

cardDeal(deck, Tiffany//, Dealer);
console.log(Tiffany.hand);
//console.log(Dealer.hand);
cardDeal(deck, Tiffany//, Dealer);
console.log(Tiffany.hand);
//cardDeal(deck, Dealer);
//console.log(Dealer.hand);
