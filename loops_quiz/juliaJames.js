/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    // check divisibility
    if (x % 3 === 0 && x % 5 === 0) {
    // print JuliaJames
        console.log("JuliaJames");
    } else if (x % 3 === 0) {
    // print Julia
        console.log("Julia");
    } else if (x % 5 === 0) {
    // print James 
        console.log("James");
    } else {
        console.log(x);    
    }
    // increment x
    x++;
}