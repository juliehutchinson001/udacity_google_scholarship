/*
 * Programming Quiz: Factorials (4-7)
 * 
 * Directions:
 * Write a for loop that prints out the factorial of the number 12:
 * 
 * A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6
 * 
 * 3! = 3 * 2 * 1 = 6 3!=3∗2∗1=6
 * 4! = 4 * 3 * 2 * 1 = 24 4!=4∗3∗2∗1=24
 * 5! = 5 * 4 * 3 * 2 * 1 = 120 5!=5∗4∗3∗2∗1=120
 * 
 */

// your code goes here
let factorialIterative = (n) => {
    // one liner
    // return reduce((x, y) => { x * y, range(1, n + 1) });
    
    // check for edge case because the factorial of 0 is 1
    if (n == 0) { return 1 }
  
    //set counter
    counter = n - 1;
    
    //set result
    finalFactResult = n;

    //loop until all of the factorial numbers have been calculated
    while (counter > 0) {
        //multiply result by the next factorial number
        finalFactResult *= counter;
        //set next factorial number
        counter -= 1;
    }
    
    return finalFactResult
}; factorialIterative = (5);