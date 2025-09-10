let fruit = ["apple","orange","apple","apple","orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

//create a function that puts the apples onto the appleshelf and the
// the oranges onto the orangeShelf.
//use a for loop, conditional statement and the textContent property

function sortFruit(){
    for(let i = 0; i < fruit.length; i++){
        if(fruit[i] === "apple"){
            appleShelf.textContent += "apple";
        }
        else if(fruit[i] === "orange"){
            orangeShelf.textContent += "orange";
        }
    }
}
sortFruit()