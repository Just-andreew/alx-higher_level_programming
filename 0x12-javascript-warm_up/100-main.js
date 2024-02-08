#!/usr/bin/node

// Declare myVar
global.myVar = 89;

// Require the file to modify myVar
require('./100-let_me_const');

// Print the modified value of myVar
console.log(myVar);
