# Notes
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

## Files in this Lesson
- `01_arrays.js`
- `02_methods.js`
- `03_iterationMethods.js`

## Resources
- [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [ForEach & Map](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

## Challenges
*All challenge solutions will be up to the instructor as to how they are provided.*

---

Using the provided array, print (console log) the following three things:
    1. "Bruce"
    2. true
    3. "Hello, Nick and Tony"

```js 
let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce',
    ['Tony', 8, true]
];
```
---

**No Fives**
Using the provided array:
```js 
let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5]
```
Filter through the array and remove the 5s. This will need to be stored within a variable and printed (console log).
What should return is: `[3,7,3,2,7,2,12]`.

---

**Categorize Movies**
Using the provided array:
```js
let movies = [
    { name: "Top Gun 2", category: 'Action' },
    { name: "Scary Movie 5", category: 'Horror' },
];
```
Add three more movies to the array. Two more Horror and One more Action. These can just be added to the end of the array.

Create two different variables, `actionMovies` & `horrorMovies`, these will hold the results of the filtered `movies` array that are respective to their categories.

Print (console log) each variable to see the values returned.