/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/
// function to extract values from an object using for...in loop
function valuesInObject(obj) {
  // initialise an empty array to store values
  let valuesArray = [];
  // iterate over each property in the object
  for (let key in obj) {
    // check if the property is an own property of the object (not inherited)
    if (obj.hasOwnProperty(key)) {
      // push the value associated with the current key into the valuesArray
      valuesArray.push(obj[key]);
    }
  }
  // return array containing values
  return valuesArray;
}

// function to extract values from an object using Object.values()
function valuesInObject(obj) {
  // return an array containing the values extracted using Object.values()
  return Object.values(obj);
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
