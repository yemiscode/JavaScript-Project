// return the first index of the first element in an array that satisfy a provided call back function
const ages = [21, 6, 92, 9, 21, 34, 23, 23];

function isAdult(age) {
    return age <= 18;
};
const result = ages.findIndex(isAdult);
console.log(result);


// answer
// 1