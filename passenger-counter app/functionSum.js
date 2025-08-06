//create a function that logs out the sum of allt he lap times

//Putting it here makes it a global variable so as to be used by any function
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;


function lapTimeSum(){
    //putting them here this way makes them only accessible to this function
    let lap1 = 34;
    let lap2 = 33;
    let lap3 = 36;

    LapSum = lap1 + lap2 + lap3;
    console.log(LapSum);
}

lapTimeSum();