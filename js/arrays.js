const GROCERY_LIST = ["eggs", "coffee beans", "salad"]
console.log(GROCERY_LIST[0]);

GROCERY_LIST[0] = "bananas"
GROCERY_LIST[2] = "soap"
console.log(GROCERY_LIST);

console.log(GROCERY_LIST.length);

console.log(GROCERY_LIST[GROCERY_LIST.length - 1]);

const GROCERY_LIST2 = ["bananas", "coffee beans", "soap"]
//  GROCERY_LIST2.pop(); // removes item from end of array
//  GROCERY_LIST2.push("milk"); // adds item to end of array
//  GROCERY_LIST2.shift(); // removes item from beginning of array
GROCERY_LIST2.unshift("strawberries"); // adds an item to beginning of array
console.log(GROCERY_LIST2);

let groceryString = GROCERY_LIST2.join("... "); // joins all indexes as a string.  Can add things such as "... " to use as a separator.
console.log(groceryString);
console.log(GROCERY_LIST2.includes("soap")); // shows true or false if item is in array
console.log(GROCERY_LIST2.indexOf("soap")); // shows index number of item in array.  Returns -1 if item does not exist.
console.log(GROCERY_LIST2.indexOf("bat"));