#!/usr/bin/node

// Access the array of command line arguments
const args = process.argv.slice(2);

// Extract the first and second arguments (or set them to undefined if not present)
const arg1 = args[0] || 'undefined';
const arg2 = args[1] || 'undefined';

// Print the arguments in the specified format
console.log(`${arg1} is ${arg2}`);

