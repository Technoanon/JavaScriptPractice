/*
Richard Bruno
December 13, 2024

 Logical statements allow us to make multiple paths in our code.
Depending on the outcome of a certain expression, we will follow one code path or
another.
 There are different logic statements, and we will go over them in this chapter. We
will start with if and if else statements. After that, we will be dealing with the
ternary operator, and the final one we will be dealing with is the switch statement.
 Along the way, we will cover the following topics:
 • if and if else statements
 • else if statements
 • Conditional ternary operators
 • switch statements
 */

// IF and IF Else:

/*

if *some condition is true*, then *a certain action will happen*, else *another action will
happen*
For example, if it is raining then, I will take my umbrella, else I will leave my
umbrella at home. It is not that much different in code:

*/

/*

look at the  following syntax. We start with the word "if." After
this, we get something within parentheses. Whatever is between these parentheses
will be translated to a Boolean. If the value of this Boolean is true, it will execute the
block of code associated with if. You can recognize this block by the curly braces.

*/

let rain = true;

if(rain) {
    console.log("** Taking my umbrella when I need to go outside **");

/*

The next block is optional; it is an else block. It starts with the word "else" and is
only executed in case of the Boolean having the value false. If there is no else block
and the condition evaluates to false, the program will just skip ahead to the code
underneath the if.

*/

} else {
    console.log("** I can leave my umbrella at home**");
}

/*

if(expression) {
 // code associated with the if block
 // will only be executed if the expression is true
 } else {
 }
 // code associated with the else block
 // we don't need an else block, it is optional
 // this code will only be executed if the expression is false

*/

// example. If the age is below 18, log to the console that access is denied,
// otherwise log to the console that the person is allowed to come in:
 if(age < 18) {
     console.log("Under 18 not ALLOWED!");
 } else {
     console.log("WELCOME!");
 }