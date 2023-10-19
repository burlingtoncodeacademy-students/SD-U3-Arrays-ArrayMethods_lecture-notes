//! Arrays & Array Methods
/* 
    Arrays
        - Denoted with Square Brackets [ ]
        - Indices start at zero
    
    ex:
    const arr = ["One","Two","Three"];
                    0     1      2
*/

let list = ['milk','bread','chicken','coffee'];
console.log(list[2])

/* 
* length

    Is an object
        - using properties of the array
            - .length

    let x = arr.length
    (x will store the value  3)
*/
console.log(list.length);

/* 
* Various Data Types
    - Arrays can store a variety of data types
        - strings, numbers, booleans, object, arrays
    - typeof & instanceof
        - arrays are considered "objects"
        - is an instance of an array.
*/

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce',
    ['Tony', 8, true]
]

console.log(typeof avengers);
console.log(avengers instanceof Array);