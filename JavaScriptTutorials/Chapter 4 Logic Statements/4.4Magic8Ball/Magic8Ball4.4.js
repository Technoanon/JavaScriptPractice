/*

Richard Bruno
December 14, 2024

 */

/*

 Practice exercise 4.4
 As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.
 random() will return a random number in the range of 0 to less than 1, including 0
but not 1. You can then scale it to the desired range by multiplying the result and
using Math.floor() to round it down to the nearest whole number; for example, to
generate a random number between 0 and 9:
*/
/*
 // random number between 0 and 1
 let randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 10
 randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
 RandomNumber = Math.floor(randomNumber);
 console.log(randomNumber);
*/

/*Chapter 4
 In this exercise, we'll create a Magic 8-Ball random answer generator:
 1. Start by setting a variable that gets a random value assigned to it. The value
is assigned by generating a random number 0-5, for 6 possible results. You
can increase this number as you add more results.
 2. Create a prompt that can get a string value input from a user that you can
repeat back in the final output.
 3. Create 6 responses using the switch statement, each assigned to a different
value from the random number generator.
4. Create a variable to hold the end response, which should be a sentence
printed for the user. You can assign different string values for each case,
assigning new values depending on the results from the random value.
 5. Output the user's original question, plus the randomly selected case
response, to the console after the user enters their question.

*/
document.getElementById('getAnswer').addEventListener('click', function() {
    let userQuestion = document.getElementById('userQuestion').value.trim();
    if (userQuestion === '') {
        alert('Mists awaits a question!');
        return;
    }
    let randomNumber = Math.floor(Math.random() * 6);
    let response;

    switch (randomNumber) {
        case 0:
            response = "It is Absolute!";
            break;
        case 1:
            response = "It is Certain.";
            break;
        case 2:
            response = "Reply Hazy, Try Again.";
            break;
        case 3:
            response = "Ask Again Later.";
            break;
        case 4:
            response = "My Sources Say No.";
            break;
        case 5:
            response = "Cannot Predict Now.";
            break;
        default:
            response = "Error in Magic 8-Ball!";
    }

    // Reset the result div
    document.getElementById('result').style.visibility = 'hidden';
    document.getElementById('result').style.opacity = '0';
    document.getElementById('result').style.transform = 'rotate(0deg)';

    // Set the new content
    document.getElementById('result').innerHTML = `You asked: "${userQuestion}"<br>Misty's Magic 8-Ball says: "${response}"`;

    // After a small delay, show the result with animation
    setTimeout(function() {
        document.getElementById('result').style.visibility = 'visible';
        document.getElementById('result').classList.add('spin');
        document.getElementById('result').style.opacity = '1';
    }, 100);
})
