// I use this when I have an onclick function in my html
// function saveClicked(){
//     console.log("Button has been clicked");
// }
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
})

function renderLeads(){
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li> 

                <a href = ${myLeads[i]} target = "_blank"> 
                    ${myLeads[i]} 
                </a> 

            </li> `;

        console.log(listItems)
    }
    ulEl.innerHTML = listItems;
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
