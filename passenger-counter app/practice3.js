let myPoints = 3;

//create two functions, add3points() and remove1point(), and have them
//add/remove points to/from the my points variable

function add3Points(){
    myPoints += 3;
}

function remove1Point(){
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
//call the functions to that so that the line below logs out 10
console.log(myPoints)