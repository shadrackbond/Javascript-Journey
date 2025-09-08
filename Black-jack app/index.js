let cards = [];
let sum = 0;
let hasBlackJACK = false;
let isAlive = false;
let message = "";
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
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards =[firstCard,secondCard];
    sum = firstCard + secondCard;
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
        isAlive = true;
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
    // only allow the player to get a new card if isAlive and does not have blackjack
    if(isAlive === true && hasBlackJACK === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}
