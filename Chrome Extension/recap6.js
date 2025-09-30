//rendering images
//Create a function that renders the three team images
//Use a for loop, template strings and +=
// .innerHTML to solve the challenge.

const imgs = [
    "images/1044091.jpg",
    "images/1190670.jpg",
    "images/1338166.png"
];

const imageContainer = document.getElementById("container");
const n = imgs.length

function renderImages(){
    for(i = 0; i < n; i++ ){
        let images = imgs[i];
        imageContainer.innerHTML += `<img class = "team-img" src =${images}>`;
    }
}
renderImages()