/*
For this quiz, remove the class 'featured' from Article #2 
and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
let article2, article3;

// your code goes here!
article2 = $('.featured');
article3 = article2.next();

article2.toggleClass('featured');
article3.toggleClass('featured');

