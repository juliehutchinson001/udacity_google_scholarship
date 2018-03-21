/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === 'ballroom') {
    var weapon = "poison";
    if (suspect === 'Mr. Kalehoff') {
        var solved = true;
    }
} else if (room === 'gallery') {
    var weapon = "trophy";
    if (suspect === 'Ms. Van Cleve') {
        var solved = true;
    }
} else if (room === 'billiards room') {
    var weapon = "pool stick";
    if (suspect === 'Mrs. Sparr') {
        var solved = true;
    } 
} else {
    var weapon = "knife";
    room = 'dining room';
    if (suspect === 'Mr. Parkes') {
        var solved = true;
    }
} 

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
