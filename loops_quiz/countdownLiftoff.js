/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var countdown = 60;

while (countdown >= 0) {
    if (countdown === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (countdown === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (countdown === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (countdown === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (countdown === 6) {
        console.log("Main engine start");
    } else if (countdown === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T-" + countdown + " seconds");
    }
    countdown -= 1;
}