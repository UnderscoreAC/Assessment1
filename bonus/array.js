/**********************************************
 * Array Methods
 * ==================================
 * Provide your own example for each array method below,
 * explaining when you would use each one (it would be even better if you could give a real life example!)
 *
 * Use the documentation as provided here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * To run the file, go to your terminal, cd into this folder, and type in node array.js
 *
 ***********************************************/

/**********************************************
 * array.includes()
 * ==================================
 * When you would use it: to see if a set of data has a specific email
 ***********************************************/
let teachers = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
let sam = "sam@x.co";
console.log(teachers.includes(sam));

/**********************************************
 * array.slice()
 * ==================================
 * When you would use it: to returns a portion of an array, example below cuts off sam@x.co returns the two other things.
 ***********************************************/
// CODE HERE
let teachers = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
console.log(teachers.slice(1))

/**********************************************
 * array.splice()
 * ==================================
 * When you would use it: To replace something in an array, example I replaced bibek because im a techlead.  
 ***********************************************/
// CODE HERE
let teachers = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
teachers.splice(1, 1,'ansonchung@x.co')
console.log(teachers)

/**********************************************
 * array.indexOf()
 * ==================================
 * When you would use it: returns index of what
 ***********************************************/
// CODE HERE

/**********************************************
 * array.sort()
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE

/**********************************************
 * array.concat()
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE

/**********************************************
 * array.unshift()
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE

/**********************************************
 * array.shift()
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE
