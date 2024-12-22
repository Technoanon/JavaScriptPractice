// Project 1

//Convert miles to kilometers.
//1 mile equals 1.60934 kilometers.
let myDistanceMiles = 150;
let myDistanceKM = myDistanceMiles * 1.60934;
console.log("The distance of " + myDistanceMiles + " miles is equal to " + myDistanceKM + " kilometers");


// Project 2

//1 inch = 2.54 centimetres.
//2.2046 pounds in a kilo
let inches = 74;
let pounds = 215;
let weight = pounds / 2.2046; // in kilos
let height = inches * 2.54; // height in centimetres
console.log(weight, height);
let bmi = weight/(height/100*height/100);
console.log(bmi);