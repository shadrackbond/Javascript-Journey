//create a variable, message that stores the string: "you have three new notifications"

const { name } = require("nodeman/lib/mustache");

let message = "you have three new notifications";
let username = "per";

let messageToUser = "message" + ", " + "username";

console.log(messageToUser);// the + sign concatenates the two messages together

// create two variables. name and greeting. the name variable should store your name
// and the greeting should store e.g. "Hi, my name is"

//create a third variable, myGreeting, that contatenates the two strings
//log myGreeting to the console

let name = "Shadrack Makau";
let greeting = "Hi, my name is ";
let myGreeting = greeting + name;
console.log(myGreeting);