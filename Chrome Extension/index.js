// I use this when I have an onclick function in my html
// function saveClicked(){
//     console.log("Button has been clicked");
// }
let myLeads = [];
let inputEl = document.getElementById("input-el");

let inputButton = document.getElementById("input-btn");

inputButton.addEventListener("click", function(){
    let x = document.getElementById("input-el").value;
    myLeads.push(x)
    console.log(myLeads);
})