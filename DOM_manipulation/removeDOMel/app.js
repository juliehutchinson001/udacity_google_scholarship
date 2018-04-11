/*
 * For this quiz, remove the <ul> from the first article 
 * item!
 * 
 * You must use jQuery's remove() method.
 */

// Start with this variable!
let articleItems;

// your code goes here!
articleItems = $('.article-list').find('ul').remove();


/* ---------------------------------------------------- */

// Start with this variable!
let articleItems;
let ul;

//UDACITY's code goes here!
articleItems = $('.article-list')

ul = articleItems.find('ul');

ul.remove(); //a selector can be passed to remove() method
//ul.remove('.bold'); 
