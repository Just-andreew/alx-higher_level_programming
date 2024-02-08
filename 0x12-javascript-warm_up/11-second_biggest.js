#!/usr/bin/node

// Access the array of command line arguments
const args = process.argv.slice(2);

// Convert the arguments to integers and sort them in ascending order
const numbers = args.map(Number).sort((a, b) => a - b);

// Check the length of the sorted numbers array
if (numbers.length <= 1) {
  console.log(0); // If no or only one argument is passed, print 0
} else {
  // Print the second last element, which is the second biggest integer
  console.log(numbers[numbers.length - 2]);
}
