let num1 = 8;
let num2 =2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

//create four functions: add(), subtract(), divide(), multiply()
//call the correct function when the user clicks on one of the buttons
//perform the given calculation using num1 and num2
//render the result of the calculation in the paragrapy with id ="sum-el"
// e.g. if the user clicks on the plus button you should render
//sum: 10 inside the paragraph with id ="sum-el"

let operation = document.getElementById("sum-el")
let initialContent = operation.textContent;

function clear(){
    operation.textContent = initialContent;
}
function add(){
    clear();
    console.log("add button has been clicked");
    operation.innerText += num1 + num2 ;
}
function subtract(){
    clear();
    console.log("subtract button has been clicked");
    operation.innerText += num1-num2;
}

function divide(){
    clear();
    console.log("divide button has been clicked");
    operation.innerText += num1/num2;
}

function multiply(){
    clear();
    console.log("multiply button has been clicked");
    operation.innerText += num1 * num2;
}
clear()