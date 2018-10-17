// Game Timer
var count = 60;

// Right, Wrong, and Unanswered Questions

var rightCount = 0;
var wrongCount = 0;
var unansweredCount = 0; 

// Game Functions

$(document).ready (function(){
    $('#gameplay_container').hide();
    $('#end_container').hide();
    window.scrollTo(0,500);

    // Start the game when you press kickoff!
    $('#start_button').on("click", function(){
        $('#start_menu').hide();
        $('#gameplay_container').show();

        
    })
})