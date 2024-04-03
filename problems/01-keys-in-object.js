/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/
// function to extract keys from an object using a for...in loop
function keysInObject(obj) {
  // initialise empty array to store keys
  let keysArray = [];
  // iterate over each property in the object
  for (let key in obj) {
    // check if the property is an own property of the object (not inherited)
    if (obj.hasOwnProperty(key)) {
      // push the key into the keysArray
      keysArray.push(key);
    }
  }
  // return the array containing keys
  return keysArray;
}

// function to extract keys from an object using Object.keys()
function keysInObject2(obj) {
  // return an array containing the keys extracted using Object.keys()
  return Object.keys(obj);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
