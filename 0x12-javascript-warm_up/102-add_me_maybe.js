#!/usr/bin/node

// Define the addMeMaybe function
function addMeMaybe (number, theFunction) {
  // Increment the number
  const incrNumber = number + 1;
  // Call the function with the incremented number
  theFunction(incrNumber);
}

// Export the addMeMaybe function so it's visible from outside
module.exports.addMeMaybe = addMeMaybe;
