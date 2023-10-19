//! Array Methods
/* 
    Methods are like functions.
        - Can accept argument
        - Is used to accomplish a specific task
        - Is a part of the Array Object
*/

/* 
* .push()
    - Adds a value to the end of the array.
*/

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('Pizza');
// console.log('Push: ', food);

/* 
* .splice()
    - Can remove and replace a value within an array.
    - Takes in 3 arguements
        - Numeric value: Notes which position (index of array) 
        - Numeric value: Indicates how many items to remove
            - can be zero.
        - The data value to replace.
    
    ex: arr.splice([position],[how many removed],[data type])
*/
food.splice(1, 1, 'Tacos');
// console.log('Splice: ', food);

/* 
* .pop()
    - Removes an item from the end of the array.
*/
food.pop();
// console.log('Pop: ', food);

/* 
* .shift()
    - Removes the first index of the array.
*/
food.shift();
// console.log('Shift: ', food);

/* 
* .unshift()
    - Adds a value to the beginning of the array.
*/
food.unshift("Hamburger", "Salad");
// console.log('Unshift: ', food);

/* 
* .toString()
    - Takes the values within the array and returns back a string.
    - is limited to what types of data is processed.
        - objects would return as [object Object]
*/

let rgb = ['red','green','blue'];
// console.log(rgb.toString());
let colors = rgb.toString();
// console.log(typeof colors);

let misc = ['test', 1, true, {test: 'testing'}];
console.log(misc.toString());


