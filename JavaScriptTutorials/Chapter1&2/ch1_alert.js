prompt("I have some Putney?!");
/* Practice Exercise 2.3
Write some code to calculate the hypotenuse of a triangle using the Pythagorean
theorem when given the values of the other two sides. The theorem specifies that the
relation between the sides of a right-angled triangle is a2 + b2 = c2.
 */
let a;
a = prompt("Enter value a: ");
let b;
b = prompt("Enter value b: ");
a=Number(a);
b=Number(b);
let hypontenuseVal1 = ((a*a) + (b*b))**0.5;
console.log(hypontenuseVal1);
/*
2.4
 Create variables for three numbers: a, b, and c. Update these variables with the
following actions using the assignment operators:
 */
let a2 = 6;
let b2 = 17;
let c2 = 29;
a2 = a2 + b2;
a2 = a2 / c2;
c2 = c2 % b;
console.log(a2, b2, c2);