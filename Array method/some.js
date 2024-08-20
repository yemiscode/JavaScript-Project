// the some method test wether at least one element in an array passes a test that is implemented by a call back function
let ages = [1, 3, 9, 0, 23, 4];
const result = ages.some(isAdult);
function isAdult(age) {
    return age >= 18
}
console.log(result)


// answer
// ['orange', 'banana', 'apple']