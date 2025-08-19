//document.getElementById("count-el").innerText = 5;
//ctrl + k + c for commenting a group of code;

//onclick event listener
//initialize the count as 0
//listen for clicks on the increment variable when the button is clicked
//change the count-ek in the HTML to reflect the new count

let countEl = document.getElementById("count-el");//passing arguments to a function

console.log(countEl);

let count = 0;

function increment(){
    count += 1;
    countEl.innerText = count;
    console.log(count);

}
//Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
//create a function, save(), which logs out the count when its called
 function save(){
    //create a variable that contains both the count and the data separator, i.e. "12 -"
    let variable = " " + count + " - ";
    //Render the variable in the saveEl using innerText
    saveEl.innerText += variable;
    console.log(count);
}




