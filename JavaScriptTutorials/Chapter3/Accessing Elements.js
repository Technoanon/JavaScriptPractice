/*
Richard Bruno
December 12, 2024

Array & Elements

Accessing elements: Array index java: assigns the position automatically.
the first value is 0. it's possible to call a specific array position.
use name if the array and square brackets the end, put the index to access
between square brackets:
 */

cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]); // output will be undefined
console.log(cars[-1]); // output will be undefined

// -Overwriting elements: This is not best practice **Array Methods will review that**
cars[0] = "Tesla";
console.log(cars[0]);
console.log(cars);
cars[3] = "Kia";
cars[-1] = "Fiat";
console.log(cars[3]);
console.log(cars[-1]);
cars[4] = "Toyota";
console.log(cars);

// Built-in length property

colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];

console.log( "Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);
lastElement = colors[colors.length - 1];
console.log( "Length of colors:", colors.length);
/*
Practice exercise 3.1
 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
"Apples."
 2. Check your list length in the console.
 3. Update "Bread" to "Bananas."
 4. Output your entire list to the console
 */
let shopList = ["milk", "bread", "apples"];
console.log(shopList.length);
shopList[1] = "banana";
console.log(shopList);