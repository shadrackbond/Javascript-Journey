//addEvenrListener and object in an array
let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const logButton = document.getElementById("log-btn");

logButton.addEventListener("click", function(){
    console.log(data[0].score)
})