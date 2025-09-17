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
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li> ";
}
//Use createElement() and append() instead of innerHTML
//append means adding something to the end of a document
// instead of innerHTML we could use createElement() this is how:

// for (let i = 0; i < myLeads.length; i++) {
//     //pseudo code is:
//        //Create element
//        //set text content
//        //applent to ulEl
//        const li =document.createElement("li");
//        li.textContent = myLeads[i];
//        ulEl.append(li)
// }
