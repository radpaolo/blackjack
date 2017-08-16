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
function cardDeal(deck, player){
  //take a card from the top of the deck (there is one less card in the deck)
  var holdCard = deck.splice(0, 1)[0];
  //that card is passed to the player (the player has one card in their hand)
  player.hand.push(holdCard);
}


var deck = getDeck();
deck = shuffleDeck(deck);
var Tiffany = new Player(Tiffany);
cardDeal(deck, Tiffany);
console.log(Tiffany.hand);
cardDeal(deck, Tiffany);
console.log(Tiffany.hand);
