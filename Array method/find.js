// return the value of the first element in an array that passes a test or a function which is usually a call back function
const ages = [21, 6, 92, 9, 21, 34, 23, 23];
const isAdult = ages.find(isAge);
function isAge(age) {
    return age >= 18;
}
console.log(isAdult);

const fruits = [
    { name: 'apples', quantity: 2 },
    { name: 'banana', quantity: 0 },
    { name: 'cashew', quantity: 4 }
];
const result = fruits.find(({ name }) =>
    name === 'cashew'
);

    console.log(result);


    // 21
    // {name: 'cashew', quantity: 4}   