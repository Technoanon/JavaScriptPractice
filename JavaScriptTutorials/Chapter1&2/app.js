let a1 = 10; // assign a value of 10 to variable a
console.log(a1); // This will output 10 into the console
/*
This is a multi-line
Comment
*/
console.log(Math.random() * 1000); // random math "fun" exercise

let boss = ("Ricky Bruno, "); // Name intro
console.log(boss/* + " The one and only" */); //multi-line
let bossAge = (45);
let coder = true;
let message = " Hello, My name is " + boss + "I am " + bossAge +" years old and i can code JavaScript! : " + coder;
console.log(message);
// Practice excercise 2.1
let str1 = 'Rissy';
let str2 = " Roo";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof myNum);
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof val2);
console.log(typeof val1);

let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;
console.log(result1);
let result2 = str1 + str2;
console.log(result2);

let nr11 = 2;
let nr21 = 3;
let result12 = nr11 ** nr21;
console.log(result12);

let nr1a = 4;
let nr2a = 5;
let nr3a = 2;
console.log(nr1a++ + ++nr2a * nr3a++);
//2.4

let a2 = 6;
let b2 = 17;
let c2 = 29;
a2 = a2 + b2;
a2 = a2 / c2;
c2 = c2 % b2;
console.log(a2, b2, c2);