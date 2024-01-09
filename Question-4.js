/*
Q4. Write a JavaScript function called calculateTax that takes an income 
as an argument and returns the amount of tax to be paid. Use a closure to 
handle different tax rates based on income ranges. 
Test thefunction with various incomes.
*/

function calculateTax() {
  const brackets = [
    { min: 0, max: 10000, rate: 0.1 },
    { min: 10001, max: 50000, rate: 0.2 },
    { min: 50001, max: Infinity, rate: 0.3 },
  ];
  // Inner function to determine the tax rate for a given income
  function getTaxRate(income) {
    return brackets.find(
      (bracket) => income >= bracket.min && income <= bracket.max
    ).rate;
  }

  // Outer function to calculate tax based on income and tax rate
  return function (income) {
    const taxRate = getTaxRate(income);
    const taxAmount = income * taxRate;
    return taxAmount;
  };
}
const taxCalculator = calculateTax();

const income1 = 8000;
const tax1 = taxCalculator(income1);

const income2 = 30000;
const tax2 = taxCalculator(income2);

const income3 = 70000;
const tax3 = taxCalculator(income3);

// Displaying the results
console.log(`For an income of $${income1}, the tax to be paid is: $${tax1}`);
console.log(`For an income of $${income2}, the tax to be paid is: $${tax2}`);
console.log(`For an income of $${income3}, the tax to be paid is: $${tax3}`);
