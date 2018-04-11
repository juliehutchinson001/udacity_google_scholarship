/*
 * For this quiz, use jQuery's each() method to iterate 
 * through the <p>s, calculate the length of each one, 
 * and add each length to the end of each <p>.
 * 
 * Also, make sure you don't change the text inside each 
 * <p> except to add the length, otherwise your length 
 * numbers won't be correct!
 */

// Your code goes here!
$('.article-item > p').each (function(ind) {
    let chars = $(this).text().length;
    
    $(this).append("( " + chars + " characters long)");
});

/* --------------------------------------------------- */

// UDACITY's code goes here!

function numberAdder() {
    let text;
    let number;

    text = $(this).text(); //this function finds the text

    number = text.length; //this finds the length of the text

    //this changes the element to the same text + ' ' + total length
    $(this).text(text + " " + number); 

}

$('p').each(numberAdder); //this is iterating through all of the p tags