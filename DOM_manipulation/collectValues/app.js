/*
 * For this quiz, use jQuery's val method to make live 
 * changes to the 'Cool Articles' <h1>!
 * 
 * The starter code below creates an event listener that 
 * will run any time the input changes.
 * For more on events, check the instructor notes.
 */

$('#input').on('change', function() {
    let val;
    let h1;
    
    // Your code goes here!
    val = $('#input').val();
    h1 = $('.articles').children('h1').text(val);
});