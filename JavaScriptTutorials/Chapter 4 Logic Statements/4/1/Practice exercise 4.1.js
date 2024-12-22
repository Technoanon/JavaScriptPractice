/*

Richard Bruno
December 13, 2024

*/

/*

 Practice exercise 4.1
 1. Create a variable with a Boolean value.
 2. Output the value of the variable to the console.
 3. Check whether the variable is true and if so, output a message to the console,
using the following syntax:
 if(myVariable){
 //action
 }
Logic Statements
 4. Add another if statement with an ! in front of the variable to check whether
the condition is not true, and create a message that will be printed to the
console in that instance. You should have two if statements, one with an
! and the other without. You could also use an if and an else statement
instead—experiment!
 5. Change the variable to the opposite to see how the result changes.

*/

// 1. Create a variable with a Boolean value.

// switch out true and false

let aVariable = false;
//let aVariable = true;

// 2. Output the value of the variable to the console.

console.log(aVariable); // Output = true

/*

3. Check whether the variable is true and if so, output a message to the console,
using the following syntax:
 if(myVariable){
 //action
 }

*/

if(aVariable) {
    console.log("The variable is True!");
}

/*

 4. Add another if statement with an ! in front of the variable to check whether
the condition is not true, and create a message that will be printed to the
console in that instance. You should have two if statements, one with an
! and the other without. You could also use an if and an else statement
instead—experiment!

*/

if(!aVariable) {
    console.log("The variable is false!");
}

/*

*** This will work also with else statement: ***

if(myVariable) {
    console.log("The variable is true!");
} else {
    console.log("The variable is false!");
}

*/