// First number is the value, second is the sleeve
// [3, 2] = Three of Diamonds
let playerhands = [[],[]]; // 2 players
let deck = [];
for (let i = 0; i < 4; i++){
    for (let x = 0; x < 13; x++){
        deck.push([x, i]);
    }
}

shuffle();
deal(5);
//console.log(handcontains(playerhands[0], [5,1]));
console.log(mosthearts());

function mosthearts(){
    let points = [];
    for(let i = 0; i < playerhands.length; i++){
        points.push(0);
    }
    for(let i = 0; i < playerhands.length; i++){
        for(let x = 0; x < playerhands[i].length; x++){
            for(let y = 0; y < 13; y++){
                if(playerhands[i][x] == [y,1]){
                    points[i]++;
                }
            }
        }
    }
    return points;
}

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

function handcontains(hand, card, specific = false){
    if (specific){
        return hand.includes(card);
    }
    else{
        for(let i = 0; i < hand.length; i++){
            if (hand[i][0] == card[0]){
                return true;
            }
        }
        return false;
    }
}