// noinspection JSUnusedGlobalSymbols

/*
Richard Bruno
December 12, 2024

Adding and replacing elements
 We can add elements with the push() method:
 */
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits);
/*To add elements at a certain index?
    You can use the splice() method. This one is slightly more difficult:
 */

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
//arrOfShapes.splice(2, 0, "square", "trapezoid"); //inserts at index 2 and deletes 0
//console.log(arrOfShapes);

//arrOfShapes.splice(2,2, "square", "trapezoid");
arrOfShapes.splice(2, 12, "square", "trapezoid");
console.log(arrOfShapes);
/*
Concatenated:
You can also add another array to your array. This can be done with the concat()
method. This way, you can create a new array that consists of a concatenation of both
arrays. The elements of the first array will be first, and the elements of the argument
of concat() will be concatenated to the end
 */
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

/*
concat() method can do even more! We can use it to add values as well. We can
add a single value, or we can comma-separate multiple values
 */
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

/*
 Deleting elements
There are several ways in which you can delete elements from an array. Removing
the last element is done with pop()
 */
arr8.pop();
console.log(arr8);

// Deleting the first element can be done with shift(). This causes all other indices to
// be reduced by one:

arr8.shift();
console.log(arr8);

//splice can be used to delete items: specify index position and number of elements to be deleted

arr8.splice(1,3);
console.log(arr8);
/*
 This is not a method, but you can use it
to change the value of a certain position of the array to undefined:
 */
delete arr8[0];
console.log(arr8);

/*
Finding elements:  to check whether a value is present in an array, you can use the find()
method. writing the function in two different ways in the following code snippet. They
are actually doing the same, except that the first one is checking for an element
being equal to 6, and the second for an element being equal to 10
 */
arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function (e) {return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

/* ^^
A function can take a certain input. In this case, it takes the element of the array as
an input. When the element of the array equals 6 (findValue) or 10 (findValue2), it
returns the element. In Chapter 6, Functions, we will cover functions in much more
detail.
 */

/*
Often, you do not only want to find the element, but you want to know what
position it is on. This can be done with the indexOf() method. This method returns
the index on which the value is found. If a value occurs in an array more than once,
it will return the first occurrence. If the value is not found, it will return -1
 */
arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6); //  Returns 1 since that is the index position of 6 in the array.
let findIndex2 = arr8.indexOf(10); // will return -1 because the array does not contain 10.
console.log(findIndex, findIndex2);

/*
If you want to find the next occurrence of the specified number, you can add a
second argument to indexOf(), specifying from which position it should start
searching: */
 arr8 = [ 2, 6, 7, 8 ];
 let findIndex3 = arr8.indexOf(6, 2);
 console.log(findIndex3); //will be -1, because 6 cannot be found starting from index 2

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog); // The value of lastDog will be 4 because that is the
// last occurrence of dog in the array

/*
Sorting:
There is also a built-in method for sorting arrays. It sorts numbers from small to
high and strings A-Z. You can call sort() on an array and the order of the values of
the array will change to a sorted order
 */
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort(); // the array is now sorted alphabetically
console.log(names);

let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log(ages);

/*
 Reversing
 The elements of the array can be reversed by calling the built-in method, reverse(),
on an array.
 */
let namesReversed = names.reverse(); // reverses the array
console.log(namesReversed);

/*
Practice exercise 3.2
 1. Create an empty array to use as a shopping list.
 2. Add Milk, Bread, and Apples to your list.
 3. Update "Bread" with Bananas and Eggs.
 4. Remove the last item from the array and output it into the console.
 5. Sort the list alphabetically.
 6. Find and output the index value of Milk.
 7. After Bananas, add Carrots and Lettuce.
 8. Create a new list containing Juice and Pop.
 9. Combine both lists, adding the new list twice to the end of the first list.
 10. Get the last index value of Pop and output it to the console.
 */
const shoppingList = []; // 1
shoppingList.push("Milk", "Bread", "Apples" ); //2
shoppingList.splice(1, 1, "Bananas", "Eggs"); //3
// shoppingList.pop(); //4
const removeLast = shoppingList.pop(); // 4. remove the last item from the array and output it into the console.
console.log(removeLast);
//console.log(shoppingList);
shoppingList.sort(); // 5. Sort the list alphabetically.
console.log(shoppingList);
//console.log(removeLast);
console.log(shoppingList.indexOf("Milk")); // 6. Find and output the index value of Milk.
shoppingList.splice(1, 0, "Carrots", "Lettuce"); // 7. After Bananas, add Carrots and Lettuce
const shoppingList2  = ["Juice", "Pop"]; //8. Create a new list containing Juice and Pop.
const finalShoppingList = shoppingList.concat(shoppingList2, shoppingList2);
console.log(finalShoppingList.indexOf("Pop"));
console.log(finalShoppingList);
