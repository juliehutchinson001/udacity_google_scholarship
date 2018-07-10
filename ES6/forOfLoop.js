/* Directions:
 * Write a for...of loop that:
 *
 * loops through each day in the days array
 * capitalizes the first letter of the day
 * and prints the day out to the console
 * Your code should log the following to the console:
 *
 * Sunday
 * Monday
 * Tuesday
 * Wednesday
 * Thursday
 * Friday
 * Saturday
 *
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday',
            'thursday', 'friday', 'saturday'];

// your code goes here

for(let day of days) {
    let capsDay = `${day.charAt(0).toUpperCase()}${day.slice(1)}`;
    console.log(capsDay);
}
