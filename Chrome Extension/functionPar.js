const Welcome = document.getElementById("welcome-el");

// function greetings(name){// name becomes a parameter which has to be used in the function
//     Welcome.textContent = "welcome back Shaddbond, How are you Sir? ";
// }

// greetings()

function greetings(greeting, name){
    Welcome.textContent = `${greeting} , ${name} How are you doing this fine time Sir? `
}

greetings("hello", "JamesBond")