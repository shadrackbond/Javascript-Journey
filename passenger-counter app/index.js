//document.getElementById("count-el").innerText = 5;
//ctrl + k + c for commenting a group of code;

//onclick event listener
//initialize the count as 0
//listen for clicks on the increment variable when the button is clicked
//change the count-ek in the HTML to reflect the new count

// let countEl = document.getElementById("count-el");//passing arguments to a function

// console.log(countEl);

// let count = 0;

// function increment(){
//     count = count + 1;
//     countEl.innerText = count;
//     //console.log(count);

// }
// //create a function, save(), which logs out the count when its called
// function save(){
//     console.log(count);
// }

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
//Create tow variables(name and greeting) that contains your name
// and the greeting we want to render on the page
//Render the welcome page using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el");

let name = "Shadrack Makau, ";
let greeting = "Hello !! Welcome to the first of its kind coding journey";

welcomeEl.innerText = name + greeting;

welcomeEl.innerText += " emoji";


