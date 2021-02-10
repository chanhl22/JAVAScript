// function cal(mode) {
//     var funcs = {
//         'plus': function (left, right) { return left + right },
//         'minus': function (left, right) { return left - right }
//     }
//     return funcs[mode];
// }

// alert(cal('plus')(2, 1));
// alert(cal('minus')(2, 1));

// var process = [
//     function (input) { return input + 10},
//     function (input) { return input * input},
//     function (input) { return input / 2}
// ];

// var input = 1;
// for (var i = 0; i < process.length; i++){
//     input = process[i] (input);
// }

// alert (input);

var numbers = [8,7,3,12,10,20,1,2,4,5,6];

// var func = function (a,b){
//     return a-b;
// }

function func(a,b) {
    return a-b;
}

console.log(numbers.sort(func));