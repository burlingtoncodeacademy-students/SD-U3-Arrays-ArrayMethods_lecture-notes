//! Iteration Methods
/* 
* .filter() & .includes()
    - Does not destroy original array
    - Typically stores the new array (from filter) in a new variable.
    - Takes a callback (cb) function
        - returns true/false
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

/* 
* .find()
    - uses a callback function to iterate over each data value in the array.
    - provides a true/false.
    - returns back 
*/
let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter', 'Mikey'
];

/* 
* .forEach()
    - Iterates over each data value within an array.
        - runs a set of logic for each item.
    - works similarly as a for-loop or for-of-loop.
    - Runs a callback function for each value.
    - Doesn't actually return anything.
        - able to mutate the calling array.

    ex: 
    arr.forEach((item, index) => { ...code block })
*/

/* 
* .map()
    - Uses a callback function
    - can also set the index value along with the data evaluated.
    - creates and returns new array.
*/
