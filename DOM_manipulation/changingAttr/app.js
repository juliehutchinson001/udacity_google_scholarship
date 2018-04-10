/*
 * For this quiz, set the href of the <a> in the first nav 
 * item to "#1".
 * 
 * You must use jQuery's attr() method!
 */

// Start with this variable!
let navList;

// your code goes here!
navList = $('li:first-child');
navList.attr("href", "#1");

/* ---------------------------------------------------- */ 
// Start with this variable!
let navList;

// your code goes here!
navList = $('a:first');
navList.attr("href", "#1");

/* ---------------------------------------------------- */ 
// Start with this variable!
let navList;

// your code goes here!
navList = $('a');
navList.attr("href", "#1");

/* ---------------------------------------------------- */ 
// Start with this variable!
let navList;
let firstItem;
let link;

// UDACITY's code goes here!
navList = $('.nav-list');
firstItem = navList.children().first();
link = firstItem.find('a');
link.attr("href", "#1");