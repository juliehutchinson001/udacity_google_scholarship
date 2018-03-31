/*
 * Programming Quiz: Inline Functions (5-6)
 * 
 * Directions:
 * Call the emotions() function so that it prints the output you see below, 
 * but instead of passing the laugh() function as an argument, pass an 
 * inline function expression instead.
 * 
 * emotions("happy", laugh(2)); // you can use your laugh function from 
 * the previous quizzes
 * Prints: "I am happy, haha!"
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression