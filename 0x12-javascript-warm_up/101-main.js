#!/usr/bin/node

// Require the callMeMoby function from 101-call_me_moby.js
const callMeMoby = require('./101-call_me_moby').callMeMoby;

// Call the callMeMoby function with the desired number of times and the function to execute
callMeMoby(3, function () {
  console.log('C is fun');
});
