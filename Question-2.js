/*
Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a
personalized greeting message. Use this function to greet three different people.
*/

function generateGreeting(name) {
  return `Hello, ${name}! welcome to our website`;
}

const person1 = "Tauisf";
const person2 = "Ahmad";

const greeting1 = generateGreeting(person1);
const greeting2 = generateGreeting(person2);

//Displaying the result
console.log(greeting1);
console.log(greeting2);
