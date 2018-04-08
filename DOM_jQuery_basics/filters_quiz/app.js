/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (let h1), children (let kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
let articleList, h1, kids, parents;

articleList = $('.article-list');

// Your code goes here!
h1 = articleList.siblings('h1');

// Your code goes here!
kids = articleList.children();

// Your code goes here!
parents = articleList.parents('div');