/*
 * Programming Quiz: Facebook Friends (7-5)
 * 
 * Directions:
 * Create an object called facebookProfile. The object should have 3 properties:
 * 
 * your name
 * the number of friends you have, and
 * an array of messages you've posted (as strings)
 * The object should also have 4 methods:
 * 
 * postMessage(message) - adds a new message string to the array
 * deleteMessage(index) - removes the message corresponding to the index provided
 * addFriend() - increases the friend count by 1
 * removeFriend() - decreases the friend count by 1
 * 
 */
 
 // your code goes here

 let facebookProfile = {
    name: "Julie",
    numberOfFriends: 99,
    messages: ["Hi there!", "No todos son malos", "Happy Birthday!", "What's up!"],
    postMessage: function(message) {
        message = "Welcome to facebook";
        facebookProfile["messages"].push(message);
    },
    deleteMessage: function(index) {
        if(index >= 0 && index < facebookProfile["messages"].length) {
            facebookProfile["messages"].splice(index, 1);
        }
    },
    addFriend: function() {
        ++facebookProfile["numberOfFriends"]
    },
    removeFriend: function() {
        --facebookProfile["numberOfFriends"]
    }
 };