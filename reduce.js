const fruit = ['apple', 'grape', 'banana', 'apple', 'orange', 'grape', 'apple', 'orange'];
 
const result = fruit.reduce((object, currentValue) => {
    console.log(`object : ${object[currentValue]}`);
    console.log(`currentValue : ${currentValue}`);
    if (!object[currentValue]) {
        object[currentValue] = 0;
    }
    object[currentValue]++;
    console.log(`object : ${object[currentValue]}`);
    console.log(`currentValue : ${currentValue}`);
    console.log("              ");
    return object;
}, {});
 
console.log(result);

// let total = [1, 2, 3, 4, 5].reduce(
//     ( acc, curr ) => acc + curr, 
//     0
//   );
//   console.log(total) // 결과값: 15

// var res = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
//     console.log(`currentIndex : ${currentIndex}`);
//     console.log(`accumulator : ${accumulator}`);
//     console.log(`currentValue : ${currentValue}`);
//     console.log(`currentIndex : ${currentIndex}`);
//     console.log("                              ");
//     return accumulator + currentValue;
// }, 0);

// console.log("res:", res);