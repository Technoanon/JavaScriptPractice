/*
Richard Bruno
December 12, 2024

Objects in JavaScript:

Another complex data structure that can contain
more than one value: objects! Objects are very useful and can be used to describe
real-life objects as well as more complex abstract concepts that allow for more
flexibility in your code.
 Secretly, you have just been introduced to objects already, because arrays are a
very special type of object. Arrays are objects with indexed properties. All the other
objects, and also the objects we will see here, are objects with named properties. This
means that instead of an automatically generated index number, we will give it a
custom descriptive name.
 As we can tell from the following code, arrays are defined by JavaScript as being of
the object type:
 */

// arrays are defined by JavaScript as being of 1the object type:
let arr = [0, 1, 2];
console.log(typeof arr);

/*
object is a chance to
group multiple variables into one. This is done with curly brackets: { and }. Let's
have a look at this object of a dog here:
 */
let dog = {
    dogName: "Lexi",
    weight: 2.4,
    color: "Black & White",
    breed: "Husky & Aussie Shepard",
    age: 1,
    chicken: true
};

/*
 We can access the properties of this object in a very similar way as we would
with the array. This time, we are not using the index number, but the name of the
property, to get the value:
 let dogColor1 = dog["color"];
 There is another way to do this. Instead of the square brackets, the property name
can also be added to the object name with a dot in between:
 let dogColor2 = dog.color;
 This might look familiar. Do you remember how we got the length of an array with
the built-in property length? Yes—the same way!
 */

//  this is one way let LexiColor = dog["color"]; or;
let lexiColor1 = dog.color;
console.log(lexiColor1);

/*
Updating objects
 We can change the value of the properties of the objects. Again, this is similar to an
array because an array is an object as well, but for properties, we have two options
 */
dog["color"] = "blue-eyes";
dog.weight = 2.3;
console.log(dog);
/*
Practice exercise 3.4
 1. Create a new myCar object for a car. Add some properties, including, but not
limited to, make and model, and values for a typical car or your car. Feel free
to use booleans, strings, or numbers.
 [ 63 ]
JavaScript Multiple Values
 2. Create a variable that can hold the string value color. This variable
containing a string value color can now be used to reference the property
name within myCar. Then, use the variable within the square bracket notation
to assign a new value to the color property in myCar.
 3. Use that same variable and assign a new property string value to it, such as
forSale. Use the bracket notation once again to assign a new value to the
forSale property to indicate whether the car is available for purchase.
 4. Output make and model into the console.
 5. Output the value of Payments into the console
 */
//// 1. Create a new myCar object for a car. Add some properties, including, but not
//     limited to, make and model, and values for a typical car or your car. Feel free
//     to use booleans, strings, or numbers.
let myCar = {
    make: "Acura",
    model: "MDX A-spec",
    carColor: "Blue",
    modelYear: 2023,
    Payments : false
};
console.log(myCar);

/*
 2. Create a variable that can hold the string value color. This variable
containing a string value color can now be used to reference the property
name within myCar. Then, use the variable within the square bracket notation
to assign a new value to the color property in myCar.
 */

let varColor = "carColor";
myCar[varColor] = "Black";
console.log(myCar);


/*
 3. Use that same variable and assign a new property string value to it, such as
forSale (Payments). Use the bracket notation once again to assign a new value to the
Payments property to indicate whether the car is available for purchase.
*/
varColor = "Payments";
myCar[varColor] = true;
console.log(myCar);

// 4. Output make and model into the console.
console.log (myCar.make + " " + myCar.model);

// 5. Output the value of Payments into the console
console.log(myCar.Payments);

