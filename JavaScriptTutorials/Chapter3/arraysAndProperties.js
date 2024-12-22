/*
Chapter 3 Creating arrays
Richard Bruno
December 12, 2024
 */
arr1 = new Array("purple", "green", "yellow"); // Not the best way to make an Array.
arr2 = ["black", "orange", "pink"];

arr3 = new Array(10); // creates an array with empty items
arr4 = [10];
console.log(arr3);
console.log(arr4);

/*
example of array data-types
 */
let arr = ["Hi there!", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

/*
You can change the values of a constant array, but you cannot change
the array itself. Here is a piece of code to demonstrate
 */
const arrFun = ["Hi there."];
arrFun[0] = "new value";
console.log(arrFun);
arrFun = ["nope, now you overwriting the array"];