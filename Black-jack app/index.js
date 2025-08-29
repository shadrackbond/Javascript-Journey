let firstCard = 10;
let secondCard = 1;
let hasBlackJACK = false;
let isAlive = true;
let message = "";


let sum = firstCard + secondCard;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")//querySelector//selector css is more dynamic than getelementbyId
//css way of selecting id #
//css way of selecting class .

let cardsEl =document.getElementById("cards-el")

function startGame(){
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "cards: " + firstCard +" "+ secondCard;
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
    let card = 10;
    sum +=card;
    renderGame();
}

