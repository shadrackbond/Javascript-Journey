let firstCard = getRandomCard();
let secondCard = getRandomCard();
let hasBlackJACK = false;
let isAlive = true;
let message = "";
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//let sumEl = document.querySelector("#sum-el")//querySelector//selector css is more dynamic than getelementbyId
//css way of selecting id #
//css way of selecting class .
// Math.random() generates a random number between 0 and 1(not inclusive of 1)so basically 0.00.. -> 0.999...
function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if(randomCard === 1){
        return 11;
    }
    else if ( randomCard === 11 || randomCard === 12 || randomCard === 13){
        return 10;
    }
    else{
        return randomCard;
    }
    
}

function startGame(){
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "cards: ";
    //create a for loop that renders out all the cards instead of just two
    for(let i=0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card";
    }
    else if (sum === 21) {
        message = "You have a Blackjack";
        hasBlackJACK = true;
    }
    else {
        message = "You are out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    console.log("drawing out console from the deck");
    let card = getRandomCard();
    sum +=card;
    cards.push(card);
    renderGame();
}
