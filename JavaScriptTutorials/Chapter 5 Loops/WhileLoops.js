/*
Richard Bruno
December 20, 2024

 The first loop we will discuss is the while loop. A while loop executes a certain block
of code as long as an expression evaluates to true. The snippet below demonstrates
the syntax of the while loop:
 while (condition) {
 // code that gets executed as long as the condition is true
 }
 The while loop will only be executed as long as the condition is true, so if the
condition is false to begin with, the code inside will be skipped.
Here is a very simple example of a while loop printing the numbers 0 to 10
(excluding 10) to the console:
 let i = 0;
 while (i < 10) {
 console.log(i);
  i++;
 }

*/

let number;
let counter = 0;
let step = 5;

do{
    console.log(counter);
    counter += step;
} while (counter < 100);
console.log(counter);