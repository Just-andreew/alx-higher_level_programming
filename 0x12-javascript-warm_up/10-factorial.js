#!/usr/bin/node

// Define the factorial function with the specified prototype
function factorial (n) {
  if (isNaN(n) || n < 0) {
    return 1; // Factorial of NaN or negative number is 1
  } else if (n === 0 || n === 1) {
    return 1; // Factorial of 0 or 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive call for factorial calculation
  }
}

// Access the array of command line arguments
const args = process.argv.slice(2);

// Convert the first argument to an integer
const num = parseInt(args[0]);

// Call the factorial function and print the result
console.log(factorial(num));
