//arrays - ordered lists of items 

let featuredPosts = [
    "check out my netflix clone",
    "here is the code for my project",
    "I have just relaunched my portfolio"
]

let experience = [
    "CEO of SHAMAK industries",// 0 indexed since their references start from 0 and not 1    
    "Backend developer",
    "Robotics engineer at SHAMAK industries"
]

console.log(experience[0]);
console.log(experience[1]);
console.log(experience[2]);

//arrays with multiple data types

let mySelf = [
    "My name is Shadrack Makau Musembi",
    21,
    false
]
//methods a function on an object
//push the newMessage to the message array and then log out the array

let messages =[
    "Hey, how's it going?",
    "I'm great, thank you! How about you",
    "All good. Been working on my portfolio lately."
]

let newMessage = "same here!";

messages.push(newMessage);
//messages.pop(newMessage); to remove an index from an array

console.log(messages)