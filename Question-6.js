/*
Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
version of that function. The curried function should accept arguments one at a time and return a new
function until all arguments are provided. Then, it should execute the original function with all arguments.
Test the curry function with a function that adds two numbers.
*/

function curry(func) {
  const n = func.length;
  function curried(...args) {
    if (args.length >= n) {
      return func(...args);
    } else {
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  }
  return curried;
}

function add(a, b) {
  return a + b;
}
const curriedAdd = curry(add);
const addWith5 = curriedAdd(5);

const result = addWith5(3); //5+3=8
//Displaing the result
console.log(`Result : ${result}`);
