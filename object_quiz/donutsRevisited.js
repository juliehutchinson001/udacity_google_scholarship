/*
 * Programming Quiz: Donuts Revisited (7-6)
 * 
 * Here is an array of donut objects.
 * 
 * let donuts = [
 *   { type: "Jelly", cost: 1.22 },
 *   { type: "Chocolate", cost: 2.45 },
 *   { type: "Cider", cost: 1.59 },
 *   { type: "Boston Cream", cost: 5.99 }
 * ];
 * 
 * Directions:
 * Use the forEach() method to loop over the array and print out the following donut summaries using console.log.
 * 
 * Jelly donuts cost $1.22 each
 * Chocolate donuts cost $2.45 each
 * Cider donuts cost $1.59 each
 * Boston Cream donuts cost $5.99 each
 * 
 */

let donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach( (element) => {
    console.log(element.type + " donuts cost $" + element.cost + " each");
    console.log(element["type"] + " donuts cost $" + element["cost"] + " each");
});
