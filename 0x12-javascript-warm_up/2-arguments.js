#!/usr/bin/node
// Write a script that prints a message depending of the number of arguments passed

// Accessing the array of command line arguments
const arguments = process.argv;

// Subtracting 2 to account for 'node' and file name in the arrays length
const numArguments = arguments.length -2;

//If loop for each condition
if (numArguments === 0){
	console.log("No argument");
} else if (numArguments === 1) {
	console.log("Argument found");
} else {
	console.log("Arguments found");
}
