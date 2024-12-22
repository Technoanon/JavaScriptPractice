/*
Richard Bruno
December 19,2024
 */

/*
1. For Loop
A for loop is used when you know how many times you want to repeat a block of code
 */
for (let i=0; i < 5; i++){
    console.log(`this is iteration ${i}`);
}

/*
2. While Loop
A while loop repeats a block of code as long as a specified condition is true.

 1. Create a variable, i, and set its value to zero
 2. Start the while loop and check the condition that the value of i is smaller
than 10
 3. Since the condition is true, the code logs i and increases i by 1
 4. The condition gets evaluated again; 1 is still smaller than 10
 5. Since the condition is true, the code logs i and increases i by 1
 6. The logging and increasing continues until i becomes 10
 7. 10 is not smaller than 10, so the loop ends
 */

let i = 0;
while (i < 5 ) {
    console.log(`this is iteration ${i}`);
    i++;
}

let count = 0;
while (count < 5) {
    console.log(`this is iteration ${count}`);
    count++;
}

/*
3. Do-While Loop
A do-while loop will always execute the code block at least once, and then it will repeat the loop as long
as the specified condition is true.
 */

let counter = 0;
do {
    console.log(`this is iteration ${counter}`);
    counter++;
} while (counter < 5);

/*
4. For-In Loop
A for-in loop is used to iterate over the properties of an object.
 */
const object = { a: 1, b: 2,c: 3 };
for (let key in object) {
    console.log(`${key} : ${object[key]}`);
}

/*
5. For-Of Loop
A for-of loop is used to iterate over iterable objects like arrays or strings.
 */
