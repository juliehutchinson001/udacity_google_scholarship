/*
 * For this quiz, you'll need to add to the DOM tree that 
 * already exists.
 * 
 * '#family2' should be a sibling of and come after 
 * '#family1'. '#bruce' should be the only immediate child
 * of '#family2'. '#bruce' should have two <div>s as 
 * children, '#madison' and '#hunter'.
 */

// Your code goes here!
let family1 = $('#family1');
let family2 = $('<div id="family2"><h1>Family 2</h1></div>');
let bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
let madison = $('<div id="madison"><h3>Madison</h3></div>');
let hunter = $('<div id="hunter"><h3>Hunter</h3></div>');

family2.insertAfter(family1); //root of family 2 or sibling of family 1

family2.append(bruce); // Bruce is the immediate child of family 2

bruce.append(madison); // Madison is the first child of Bruce

bruce.append(hunter); // Hunter is the second child of Bruce
