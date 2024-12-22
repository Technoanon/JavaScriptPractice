/*

Richard Bruno
December 13, 2024

*/

/*

else if statements
 A variation of the if statement is an if statement with multiple else if blocks.
This can be more efficient in certain situations because you are always only going
to execute one or zero blocks. If you have many if else statements underneath one
another, they are going to be evaluated and possibly executed even though one of
the ones above already had a condition evaluate to true and proceeded to execute
the associated code block.

 Here is the written template:
If *a value falls into a certain category*, then *a certain action will happen*, else if *the
value falls into a different category than the previous statement*, then *a certain action will
happen*, else if *the value falls into a different category than either of the previous brackets*,
then *a certain action will happen*

 For example, take this statement, to determine what the ticket price should be. If
a person is younger than 3, then access is free, else if a person is older than 3 and
younger than 12, then access is 5 dollars, else if a person is older than 12 and younger
than 65, then access is 10 dollars, else if a person is 65 or older, then access is 7
dollars:

*/

let age1 = 65;
let cost = 0;
let message1;
if(age1 < 3) {
    cost = 0;
    message1 = "Access is free under three.";
} else if(age1 >= 3 && age1 < 12) {
    cost = 5;
    message1 = "Fee is 5 dollars, with child discount.";
} else if(age1 >= 12 && age1 < 65) {
    cost = 10;
    message1 = "Regular Price Ticket is 10 dollars.";
} else {
    cost = 7;
    message1 = "A ticket is 7 dollars.";
}
console.log(message1);
console.log("Your Total Cost is: ", cost);

/*

 Practice exercise 4.2
 1. Create a prompt to ask the user's age
 2. Convert the response from the prompt to a number
 3. Declare a message variable that you will use to hold the console message for
the user
 4. If the input age is equal to or greater than 21, set the message variable to
confirm entry to a venue and the ability to purchase alcohol
 5. If the input age is equal to or greater than 19, set the message variable to
confirm entry to the venue but deny the purchase of alcohol
 6. Provide a default else statement to set the message variable to deny entry if
none are true
 7. Output the response message variable to the console

 */

// 1. Create a prompt to ask the user's age

let age = prompt("Enter you're age");

// 2. Convert the response from the prompt to a number.

age = Number(age);

// 3. Declare a message variable that you will use to hold the console message

let message;

// 4. 4. If the input age is equal to or greater than 21, set the message variable to
// confirm entry to a venue and the ability to purchase alcohol

if (age >= 21) {
    message = "Your age is " + age + " you're allowed to enter and purchase alcohol";
}

// 5. If the input age is equal to or greater than 19, set the message variable to
// confirm entry to the venue but deny the purchase of alcohol

else if (age >= 18) {
    message = "Your age is  " + age + " you're allowed to enter but cannot purchase alcohol.";
}

// 6. Provide a default else statement to set the message variable to deny entry if
// none are true

else {
    message = "You're age is " + age +  " You are not allowed to enter, Sorry!";
}
// Display the message on the webpage
document.getElementById('result').textContent = message;
