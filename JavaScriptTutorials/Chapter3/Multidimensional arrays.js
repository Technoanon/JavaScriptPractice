/*
Richard Bruno
December 12, 2024

Arrays can contain any data type. This means that
arrays can also contain other arrays (which, in turn, can contain… other arrays!). This
is called a multidimensional array
 */
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays);

/* we can create an array of already existing arrays. This is called a two-dimensional
array. We can write it like this: */
let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arrOfArrays2);

// to access elements of the inner arrays, you will have to specify an index twice:
let value1 = arrOfArrays[0][1];
console.log(value1);
let value2 = arrOfArrays[2][2]; // guess value: nine*
console.log(value2);

//an array of our array of arrays. We are simply going to store this array three times in another array:
arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArraysOfArrays);
// Let get the middle element of this array:
let middleValue = arrOfArraysOfArrays[1] [1] [1];
console.log(middleValue);

/*
 Practice exercise 3.3
 1. Create an array containing three values: 1, 2, and 3.
 2. Nest the original array into a new array three times.
 3. Output the value 2 from one of the arrays into the console
 */

 let threeValue = [1, 2, 3]; // 1. Create an array containing three values: 1, 2, and 3.
console.log(threeValue);

// 2. Nest the original array into a new array three times:
let threeValueOfThree = [threeValue, threeValue, threeValue];
console.log(threeValueOfThree);

// 3. Output the value 2 from one of the arrays into the console:
let twoFromArr = threeValueOfThree[2] [1];
console.log(twoFromArr);