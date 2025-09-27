// I use this when I have an onclick function in my html
// function saveClicked(){
//     console.log("Button has been clicked");
// }
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
//storing arrays in local storage

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    ulEl.remove();
})

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();

    console.log(localStorage.getItem("myLeads"));
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
