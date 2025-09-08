//create two boolean variables, likesDocumentaries and likeStartups
//use an OR statement(||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = false;
let likeStartups = true;

if(likesDocumentaries === true || likeStartups === true){
    recommendMovie();
}
function recommendMovie(){
    console.log("Hey, check out this new film we think you will like it!")
}