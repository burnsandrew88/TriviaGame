// Game Timer
var count = 60;

// Right, Wrong, and Unanswered Questions

var rightCount = 0;
var wrongCount = 0;
var unansweredCount = 0; 

// Game Functions

var SKOL = document.getElementById("#skolSong");


$(SKOL).on("click", function playAudio(){
    SKOL.play();
})

$(document).ready (function(){
    $('#gameplay_container').hide();
    $('#end_container').hide();
    window.scrollTo(0,500);

    // Start the game when you press kickoff!
    $('#start_button').on("click", function(){
        $('#start_menu').hide();
        $('#gameplay_container').show();
        startcountDown();

        
    });

    // displays the countdown timer 

    function countDown(){
        count--;
        $('#timer_number').html(count + " Seconds");
        $('#done_button').on("click", function(){
            count = 0;
            return;
        });
        if (count == -1){
            timeUp();
            $('#gameplay_container').hide();
        }
    }

    function startcountDown(){
        setInterval(countDown, 1000);
    }

    function timeUp(){

        // variables for each question to be selected from the HTML and Checked:

        var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        
        // Checking to see if the answer is correct, wrong, or unanswered

        if (Q1 == undefined){
            unansweredCount++;

        } else if (Q1 == "1961"){
            rightCount++;
        } 
        else{
            wrongCount++;
        }

        if (Q2 == undefined){
            unansweredCount++;

        } else if (Q2 == "Metropolitan Stadium"){
            rightCount++;
        } 
        else{
            wrongCount++;
        }

        if (Q3 == undefined){
            unansweredCount++;

        } else if (Q3 == "1969"){
            rightCount++;
        } 
        else{
            wrongCount++;
        }

        if (Q4 == undefined){
            unansweredCount++;

        } else if (Q4 == "20"){
            rightCount++;
        } 
        else{
            wrongCount++;
        }

        if (Q5 == undefined){
            unansweredCount++;

        } else if (Q5 == "Gary Anderson"){
            rightCount++;
        } 
        else{
            wrongCount++;
        }

    $('#correct_answers').html(rightCount);
    $('#wrong_answers').html(wrongCount);
    $('#unanswered').html(unansweredCount);

    // Show the end of game container 

    $('#end_container').show();

    window.scrollTo (0, 500);
    }
    
})