/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that 
 * represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it 
 *    is called multiple times
 */

function laugh(num) {
    
    //initial string to be printed
    var astring = "ha";
    //final result variable
    var finalChars = "";
    
    //number of repetitions of the initial string
    for(var rept = 1 ; rept <= num ; rept++){
        //concatenate the final string
        finalChars += astring;
    }
    
    //return final string with the exclamation mark
    return finalChars + "!";
}

console.log(laugh(5));