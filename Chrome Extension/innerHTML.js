//use .innerHTML to render a buy button inside the div container

const container = document.getElementById("container");

container.innerHTML = "<button>BUY!</button>"

container.addEventListener("click", function(){
    container.innerHTML += "<p>Thank you for buying</p>"
})