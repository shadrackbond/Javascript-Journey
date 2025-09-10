let hands = ["rock", "paper", "scissor"];

// create a random function that returns a random item from the array

// function randomItem(){
//     random = Math.floor(Math.random()* 3)
//     if (random == [0]){
//         console.log("rock");
//     }
//     else if(random == [1]){
//         console.log("paper");
//     }
//     else{
//         console.log("scissor");
//     }
// }

// randomItem()

function getHand(){
    return hands[Math.floor(Math.random() * hands.length)]
}
console.log(getHand())