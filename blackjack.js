class Card{
  constructor(rank, suit){
    this.rank = rank;
    this.suit = suit;
  }
}

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

var deck = getDeck();
deck = shuffleDeck(deck);
console.log(deck.length);
