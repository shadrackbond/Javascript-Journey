let myCousre = ["learn css animations", "UI design fundamentals", "intro to clean code"];
 let n = myCousre.length;

 function anArray(){
     for(i=0; i<n ; i++){
         console.log(myCousre[i]);
    }
}

anArray();
// or.... we could totally write this code in this manner

function logOutArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
logOutArray(myCousre)

// the usefulness of writing this codde in the second way is that it makes
// the code more reusable as we can pass a different array name while calling the function

