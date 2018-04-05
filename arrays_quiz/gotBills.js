/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Directions:
 * Use the map() method to take the array of bill amounts shown below, and create a second array of 
 * numbers called totals that shows the bill amounts with a 15% tip added.
 * 
 * var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 
 *              100.10, 6.77, 2.22];
 * 
 * Print out the new totals array using console.log.
 * 
 * TIP: Check out the toFixed() method for numbers to help with rounding the values to a maximum of 
 * 2 decimal places. Note, that the method returns a string to maintain the "fixed" format of the 
 * number. So, if you want to convert the string back to a number, you can cast it or convert it 
 * back to a number:
 * 
 * Number("1");
 * >>> 1
 * 
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
