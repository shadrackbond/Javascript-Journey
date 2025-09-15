// I use this when I have an onclick function in my html
// function saveClicked(){
//     console.log("Button has been clicked");
// }
let myLeads = ["www.getelement.com", "www.areReady.com", "www.musicSoul.com"];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

for(let i =0; i< myLeads.length; i++){
    ulEl.textContent += myLeads[i] + " ";
}
