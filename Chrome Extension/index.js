// I use this when I have an onclick function in my html
// function saveClicked(){
//     console.log("Button has been clicked");
// }
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
//how function parameters can improve the code

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);// when this function is called with the myLeads data it will become the data leads
}

// has low degree of re-usability
function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li> 

                <a href = ${leads[i]} target = "_blank"> 
                    ${leads[i]} 
                </a> 

            </li> `;

        console.log(listItems)
    }
    ulEl.innerHTML = listItems;
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
    render(myLeads);

    console.log(localStorage.getItem("myLeads"));
})


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
