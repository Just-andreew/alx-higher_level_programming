// 103-object_fct.js
#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12
};

console.log(myObject);

// Define the incr function
myObject.incr = function() {
  this.value++; // Increment the value property of the object
};

myObject.incr(); // Call the incr function
console.log(myObject);

myObject.incr(); // Call the incr function again
console.log(myObject);

myObject.incr(); // Call the incr function once more
console.log(myObject);

