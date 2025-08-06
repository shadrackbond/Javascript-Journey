let lapsCompleted = 0;
//Create a function that increments the lapsCompleted variable with one
//run it three times

// function lapIncrementation(){
//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted);

//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted);

//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted);
// }

// lapIncrementation();

//PRINCIPLE: Single responsibility: A code should have a clear and concise purpose
function lapIncrementation(){
    lapsCompleted = lapsCompleted + 1;
}

lapIncrementation();
lapIncrementation();
lapIncrementation();

console.log(lapsCompleted);

