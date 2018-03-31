/*
 * Programming Quiz: Laugh (5-4)
 * 
 * Directions:
 * Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 * 
 * laugh(3);
 * 
 * >>> hahaha!
 * 
 */

var laugh = function(num) {
    var finalR = "";

    for(var i = 1 ; i <= num ; i++) {
        finalR += "ha";
    }
    return finalR + "!";
} /* finish the function expression */

console.log(laugh(10));
