//less than 6 yrs old -> free
//6 - 17 yrs old -> child discount
//18 - 26 yrs old ->student discount
//27 - 66 yrs old -> full price
//over 66 yrs old -> senior citizen discount
// create a conditional statement (if/else/else-it) that logs out the discount
// the passenger will get based on the value of the age variable

let age = 55;
let discount = " ";

if(age <= 5){
    discount = "free";
}
else if(age <= 17){
    discount = "child discount";
}
else if(age <= 26){
    discount = "student discount";
}
else if(age <= 65){
    discount = "full price";
}
else{
    discount = "senior citizen discount";
}
console.log("age: " + age)
console.log(discount);