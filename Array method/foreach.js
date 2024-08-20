// it calls a function once or each element in an array
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
days.forEach((item, index) => {
    // console.log(item, index);
    console.log(`day ${index +1} = ${item}`)
});

const numbers = [21, 6, 92, 9, 21, 34, 23, 23];
let sum = 0;
numbers.forEach((item) => {
    sum += item;
});
console.log(sum)


// answer

// day 1 = sunday
// day 2 = monday
//  day 3 = tuesday
//  day 4 = wednesday
//  day 5 = thursday
//  day 6 = friday
//  day 7 = saturday
// 229