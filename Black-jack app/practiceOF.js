// create a person object that contains three keys: name, age and country
//create a function, logData() that allows the person object to create a string in the following format:
// "per is 35 years old and lives in Norway"

//call the logData function to verify that is works

let person = {
    name: "Shadrack",
    age: 24,
    country: "Kenya"
}

function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}

logData();