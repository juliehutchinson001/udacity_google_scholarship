/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// Define the function to build the triangle
function buildTriangle(num) {
    
    //this variable concatenates my stars
    var piramid = "";
    
    // looping through each new line of the triangle
    for (var aCounter = 1 ; aCounter <= num ; aCounter++) {
        
        //concatenate the stars when makeLine is invoked in each iteration
        piramid += makeLine(aCounter);
    }
    
    //return final result once the loop ends
    return piramid;
}
// test your code by uncommenting the following line
console.log(buildTriangle(10));