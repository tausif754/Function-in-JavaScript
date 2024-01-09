/*
Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
recursion. Test the function with different inputs.
*/

function factorial(n) {
  // base case factorial of 0 is 1
  if (n === 0) {
    return 1;
  } else {
    // Recursive case n!=n*(n-1)!
    return n * factorial(n - 1);
  }
}

const num1 = 5;
const result1 = factorial(num1);

const num2 = 0;
const result2 = factorial(num2);
//Displaying the result
console.log(`The factorial of ${num1} is : ${result1}`);
console.log(`The factorial of ${num2} is : ${result2}`);
