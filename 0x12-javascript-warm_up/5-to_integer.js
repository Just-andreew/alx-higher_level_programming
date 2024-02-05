#!/usr/bin/node

// Access the array of command line arguments
const args = process.argv.slice(2);

// Convert the first argument to an integer
const num = parseInt(args[0]);

// Check if the conversion is successful and the result is a number
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log('Not a number');
}

