//! Iteration Methods
/* 
* .filter() & .includes()
    - Does not destroy original array
    - Typically stores the new array (from filter) in a new variable.
    - Takes a callback (cb) function
        - returns true/false
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

const filteredFruit = fruits.filter(fruit => {
    let results = fruit !== 'mango';
    return results;
});

// console.log(filteredFruit);

let singleFruit = 'pineapple';
// console.log(singleFruit.includes('apple'));

const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
// console.log(filteredFruit2);

/* 
* .find()
    - uses a callback function to iterate over each data value in the array.
    - provides a true/false.
    - returns back 
*/
let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter', 'Mikey'
];

let character = 'Leo';
// console.log('Find: ', tmnt.find(c => c == character));

character = 'April';
// console.log('Find: ', tmnt.find(c => c == character));

character = 'Mikey';
// console.log("Find First: ", tmnt.find(c => c == character));

character = "Splinter";
// tmnt.find((c,i) => console.log(c == character, i));


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

let newFoodList = [
    'apple','pear','mushroom','cheese','peach'
]

for(let i = 0; i < newFoodList.length; i++) {
    // console.log(newFoodList[i])
}

newFoodList.forEach(item => console.log('forEach: ', item))

newFoodList.forEach((item, i) => {
    console.log('Item: ', item);
    console.log('Index: ', i);
})

/* 
* .map()
    - Uses a callback function
    - can also set the index value along with the data evaluated.
    - creates and returns new array.
*/

let numArray = [];
let fizzBuzzArray = [];

for(let i = 0; i < 101; i++) {
    numArray.push(i);
}

numArray.map(x => {
    if(x % 15 === 0) {
        fizzBuzzArray.push(x);
    }
});

console.log(fizzBuzzArray);
