// it sort the element in an array and by by default the sort method sort the value as either string or alphabet in ascending order
const fruits = ['mango', 'orange', 'banana', 'apple'];
fruits.sort();
console.log(fruits);

let numbers = [1, 3, 9, 0, 23, 4];
numbers.sort();
console.log(numbers)

// compare function is a function that defines an alternative sort other
const point = [19, 3, 628, 20, 222, 89, 26];
// point.sort(compareFunction);

// function compareFunction(a, b) {
//     return a - b // ascending
//     // return b-a // ascending
// }
// or can be written with arrow function

point.sort((a, b) => a - b);

console.log(point);


// answer
// ['apple', 'banana', 'mango', 'orange']
//  (6) [0, 1, 23, 3, 4, 9]
//  (7) [3, 19, 20, 26, 89, 222, 628]