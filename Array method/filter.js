// filter array method create an array fill with all the element that pass a function(pass a test);
const ages = [21, 6, 92, 9, 21, 34, 23, 23];
const result = ages.filter(adultAge)
function adultAge(theAge) {
    return theAge <= 18;
}
console.log(result);

const numbers = [3, 5, 21, 8, 9, 4, 6, 83, 35, 5, 2];
const even = numbers.filter((num => {
    return num % 2 === 0;
}))
console.log(even);

// answer
// (2) [6, 9]
// [8, 4, 6, 2]