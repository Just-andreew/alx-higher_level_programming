#!/usr/bin/node

// Access the array of command line arguments
const args = process.argv.slice(2);

// Check if arguments are present
if (args[0] !== undefined) {
  console.log(args[0]);
} else {
  console.log('No argument');
}
