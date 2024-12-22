/*

Richard Bruno
December 13, 2024

 */

/*

 switch statements
 If else statements are great for evaluating Boolean conditions. There are many things
you can do with them, but in some cases, it is better to replace them with a switch
statement. This is especially the case when evaluating more than four or five values.
We are going to see how switch statements can help us and what they look like.
First, have a look at this if else statement:

*/

if(activity === "Get up") {
    console.log("It is 6:30AM");
} else if(activity === "Breakfast") {
    console.log("It is 7:00AM");
} else if(activity === "Drive to work") {
    console.log("It is 8:00AM");
} else if(activity === "Lunch") {
    console.log("It is 12.00PM");
} else if(activity === "Drive home") {
    console.log("It is 5:00PM")
} else if(activity === "Dinner") {
    console.log("It is 6:30PM");
}

/*

 Here is how we can rewrite our long if else statement in a much cleaner manner
using a switch statement:

 */

switch(activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
}

/*

The default case
 There is one part of switch that we have not worked with yet, and that is a special
case label, namely, default. This works a lot like the else part of an if else statement.
If it does not find a match with any of the cases and a default case is present, then
it will execute the code associated with the default case. Here is the template of a
switch statement with a default case:
 switch(expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  case value-n:
    // code to be executed
    break;
  default:
    // code to be executed when no cases match
    break;
 }
 The convention is to have the default case as the last case in the switch statement,
but the code will work just fine when it is in the middle or the first case. However,
we recommend you stick to the conventions and have it as a last case, since that is
what other developers (and probably your future self) will expect when dealing
with your code later.
 Let's say our long if statement has an else statement associated with it that looks
like this:
 if(…) {
  // omitted to avoid making this unnecessarily long
 } else {
  console.log("I cannot determine the current time.");
 }
 The switch statement would then look like this:
 switch(activity) {
  case "Get up":
    console.log("It is 6:30AM");
Logic Statements
 [ 80 ]
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  default:
    console.log("I cannot determine the current time.");
    break;
 }
 If the value of the activity was to be something that is not specified as a case, for
example, "Watch Netflix," it would log the following to the console

 */