/*
Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
immediately displays the result.
*/

(function () {
  const number = 7;
  const square = number * number;

  //Displaying the result
  console.log(`The square of ${number} is : ${square}`);
})();
