// First number is the value, second is the sleeve
// [3, 2] = Three of Diamonds
let playerhands = [[],[]]; // 2 players

const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Knight', 'Queen', 'King', 'Ace'];
const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
let deck = [];
for (let suit of suits){
    for (let value of values){
        deck.push(`${suit} ${value}`);
    }
}

shuffle();

for (let player of playerhands){
    deal(player, 5);
}
console.log(playerhands[0]);
console.log(playerhands[1]);

console.log(handcontains(playerhands[0], 'Hearts King'));
console.log(mostaces());

function mostaces(){
    let points = []
    points[0] = playerhands[0].reduce((acc, num) => num.includes('Ace') ? acc + 1 : acc, 0);
    points[1] = playerhands[1].reduce((acc, num) => num.includes('Ace') ? acc + 1 : acc, 0);
    console.log(points[0], points[1]);
}

function deal(hand, amount){
    for (let i = 0; i < amount; i++){
        hand.push(deck[0]); // add card to players hand
        deck.splice(0, 1); // remove card that was added from the deck
    }
}

function shuffle(){
    // Add a random index of the deck to the end of temporary deck
    // Remove that index from deck
    // When the deck is empty, newdeck will be a shuffled deck
    // assign decks value to be newdeck to finish the change
    let newdeck = [];
    while (newdeck.length < 52){
        let randomindex = Math.floor(Math.random() * (deck.length - 1 + 1))
        newdeck.push(deck[randomindex]);
        deck.splice(randomindex, 1);
    }
    deck = newdeck;
}

function handcontains(hand, card){
    return hand.includes(card);
}