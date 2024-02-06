// function getcelsius(f) {
//     const celcius = (f - 32) * 5 / 9;
//     return celcius
// }
// console.log(getcelsius(40))

// Using arrow funtion
const getCelsius = (f) => (f - 32) * 5 / 9;

console.log(getCelsius(50))

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {min,max};
}

console.log(minMax([1, 2, 3, 4]));