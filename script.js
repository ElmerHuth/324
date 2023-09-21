// First number is the value, second is the sleeve
// [3, 2] = Three of Diamonds
let playerhands = [[],[]]; // 2 players
let deck = [];
for (let i = 0; i < 4; i++){
    for (let x = 0; x < 13; i++){
        deck.push([x, i]);
    }
}

shuffle();

function deal(amount){
    for (let i = 0; i < amount; i++){
        for (let x = 0; i < playerhands.length; i++){
            playerhands[i].push(deck[0]); // add card to players hand
            deck.splice(0, 1); // remove card that was added from the deck
        }
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