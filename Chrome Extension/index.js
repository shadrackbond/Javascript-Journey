// I use this when I have an onclick function in my html
// function saveClicked(){
//     console.log("Button has been clicked");
// }
let myLeads = ["www.getelement.com", "www.areReady.com", "www.musicSoul.com"];
let inputEl = document.getElementById("input-el");

let inputButton = document.getElementById("input-btn");

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

for(let i =0; i< myLeads.length; i++){
    console.log(myLeads[i]);
}
//using for loop to log out leads