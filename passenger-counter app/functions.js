
//Running this code this way is inefficient as we will require
//to write it again at every instance we want to use it
// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);


// using it as a function allows it to be used more dynamically and allows better re-usage
function countDown(){
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

countDown();

