/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  // iterate through each object in the array
  for (let obj of objArray) {
    // check if the keyString exists in the current object
    if (keyString in obj) {
      return true; // return true if keyString exists in any object
    }
  }
  return false; // return false if keyString does not exist in any object
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
