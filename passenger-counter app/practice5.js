//when the user clicks the purchase button, render out
//"something went wrong, please try again" in the paragraph
// that has the id = "error".

let error1 = document.getElementById("error");
console.log(error1);

function displayError(){
   error1.innerText = "Something went wrong, please try again";
}
