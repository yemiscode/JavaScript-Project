// create a new array copulate it with the result of a call back function for each element in the array
// An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.


let numbers = [1, 3, 9, 0, 23, 4];
const double = numbers.map(doubleNum);
function doubleNum(value) {
    return value * 2
    
}
console.log(double)

const people = [
    {
        firstName: 'John',
        secondName: 'Matthew'
    },
    {
        firstName: 'shatter',
        secondName: 'mark'
    }
]
// const FullNames = people.map(person => `FullName: ${person.firstName} ${person.secondName}`
// )
// console.log(FullNames)
const FullNames = people.map((person, index) => ({
    id: index + 1,
    fullName: person.firstName + person.secondName
}));
console.log(FullNames)


// answer
// (6) [2, 6, 18, 0, 46, 8]
// (2) [{…}, {…}]