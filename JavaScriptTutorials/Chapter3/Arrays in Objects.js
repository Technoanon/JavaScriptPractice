/*
Richard Bruno
December 13 2024
 */
/*
Arrays in objects
Our company might have a range of activities instead of one. We can simply replace
the activity from our previous sample with an array
*/

company = {
    companyName: "Chico-Bruno, LLC",
    products: ["Boat & RV Storage", "RentalProperties", "Land Parcel", "and More..."],
    address: {
        Street: "2nd Street",
        number: "125",
        zipcode: "12345",
        city: "Sicklerville",
        state: "Florida",
        country: "USA"
    },
    email: "ChicoBruno@example.com",
    yearEstablished: "December 2017",
};
/*
Manipulating an array
 Take the following array:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
 Manipulate your array using various methods, such as pop(), push(), shift(), and
unshift(), and transform it into the following:
 ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
 You can take the following steps, or adopt your own approach:
 • Remove the first item and the last item.
 • Add FIRST to the start of the array.
 • Assign hello World to the fourth item value.
 • Assign MIDDLE to the third index value.
 • Add LAST to the last position in the array.
 • Output it to the console.
 */
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
    {test: 'one', score: 55}, ['one', 'two']];
console.log(theList);
// remove first item
theList.shift();
//remove the last item
theList.pop();
//add "FIRST"
theList.unshift("FIRST");
// assign "hello world" to the fourth item:
theList[3]= "Hello World!";
// assign "MIDDLE" to the third index value:
theList[2] = "MIDDLE";
// add "LAST" to the last position in th array:
theList.push("LAST");
// remove "null" & "Undefined"
theList.splice(4, 3);

console.log(theList);

/*
Company product catalog
 In this project, you will implement a data structure for a product catalog and create
queries to retrieve data.
 1. Create an array to hold an inventory of store items.
 2. Create three items, each having the properties of name, model, cost, and
quantity.
 3. Add all three objects to the main array using an array method, and then log
the inventory array to the console.
 4. Access the quantity element of your third item, and log it to the console.
Experiment by adding and accessing more elements within your data
structure
 */


// 1. Create an array to hold an inventory of store items.
const inventory = [];

// 2. Create three items, each having the properties of name, model, cost, and quantity.
const item1 = {name:'Autonomous Aerial Vehicle', model:'Ehang 216',cost: '$336k', quantity: '1' };
const item2 = {name:'Watch', model:'Galaxy 6',cost: '$500.00', quantity: '1' };
const item3 = {name:'Ballcap', model: 'Phillies',cost: '$40.00', quantity: '1' };

//3. Add all three objects to the main array using an array method, and then log the inventory array to the console.
inventory.push(item1, item2, item3);
console.log(inventory);

//4. Access the quantity element of your third item, and log it to the console

const thirdItemQuantity = inventory[2].quantity;
console.log(thirdItemQuantity);

// 5. Experiment by adding and accessing more elements within your data structure

const item4 = {name: 'Smartphone', model: 'Samsung', cost:'$400.00', quantity: '1' };
inventory.push(item4);
console.log(inventory);
/*
 Self-check quiz
 1. Can you use const and update values within an array?
 yes see step # 5 in previous
 2. Which property in an array gives the number of items contained in the array?
 */

const myArray = [1, 2, 3];
console.log(myArray.length); // Outputs: 3

/*

 3. What is the output in the console?
 const myArr1 = [1,3,5,6,8,9,15];
 console.log(myArr1.indexOf(0));
 console.

 */

const myArr1 = [1, 3, 5, 6, 8, 9, 15];
console.log(myArr1.indexOf(0)); // Outputs: -1 (0 is not in the array)
console.log(myArr1.indexOf(3)); // Outputs: 1 (3 is at index 1)

/*

 4. How do you replace the second element in an array myArr =
[1,3,5,6,8,9,15] with the value 4?

*/

const myArrayQ = [1,3,5,6,8,9,15];
myArrayQ[1] = 4;
console.log(myArrayQ);

/*

 5. What is the output in the console?
 const myArr2 = [];
 myArr2[10] = 'test'
 console.log(myArr2);
 console.log(myArr2[2]);

 */

const myArr2 = [];
myArr2[10] = 'test';
console.log(myArr2); // Outputs: [<10 empty items>, 'test']
console.log(myArr2[2]); // Outputs: undefined (index 2 is an empty item)


/*

 6. What is the output in the console?
 const myArr3 = [3,6,8,9,3,55,553,434];
 myArr3.sort();
 myArr3.length = 0;
 console.log(myArr3[0])

 */
const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]); // Outputs: undefined (array is empty after setting length to 0)
