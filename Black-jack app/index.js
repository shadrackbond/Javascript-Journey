let firstCard = 10;
let secondCard = 10;
let hasBlackJACK = false;
let isAlive = true;
let message = "";


let sum = firstCard + secondCard;
// write the conditional according to these rules
//if less than or equal to 20: do you want to draw a new card?
//else if exactly 21: you have blackjack
//else: you are out of the game

if(sum <= 20){
    message = "Do you want to draw a new card";
}
else if(sum === 21){
    message = "Wow, you have a Blackjack";
    hasBlackJACK = true;
}
else{
    message = "you are out of the game";
    isAlive = false;
}
console.log(hasBlackJACK)
console.log(isAlive)
console.log(message)