#!/usr/bin/node
// reads and prints the contents of a file
const fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString().trim());
  }
});
