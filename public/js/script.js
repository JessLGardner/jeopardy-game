
$(function(){

// QUESTION DATA //   
    var QuestionSet = [
        {
            id: '1-1',
            question: 'question 1',
            answers: { 
                a1: 'answer1',
                a2: 'answer2',
                a3: 'answer3',
                a4: 'answer4'
            },
            correctAnswer: 'a1',
            points: 100
        },
        {
            id: '1-2',
            question: 'question 2',
            answers: {
                a1: 'answer1',
                a2: 'answer2',
                a3: 'answer3',
                a4: 'answer4'
            },
            correctAnswer: 'a2',
            points: 200
        },
        {
            id: '1-3',
            question: 'question 3',
            answers: {
                a1: 'answer1',
                a2: 'answer2',
                a3: 'answer3',
                a4: 'answer4'
            },
            correctAnswer: 'a3',
            points: 300
        },
        {
            id:'1-4',
            question: 'question 4',
            answers: {
                a1: 'answer1',
                a2: 'answer2',
                a3: 'answer3',
                a4: 'answer4'
            },
            correctAnswer: 'a4',
            points: 400
        },
        {
            id: '1-5',
            question: 'question 5',
            answers: {
                a1: 'answer1',
                a2: 'answer2',
                a3: 'answer3',
                a4: 'answer4'
            },
            correctAnswer: 'a1',
            points: 500
        }
    ];
    
// GAMEPLAY ///

    // need these to be global variables
    var currentQuestion = null;
    var clickedButtonId = null;
    var currentPoints = 0;

    // choose points button 
    $('.button').on('click', function(){
        // set button clicked as var
        clickedButtonId = $(this).attr('id');
        // find question data {object} with button var
        currentQuestion = QuestionSet.find(function(object) {       
                console.log('question');
            return object.id === clickedButtonId;
        });

        // fill in question modal
        $('#question').html(currentQuestion.question);
        $('#a1').html(currentQuestion.answers.a1);
        $('#a2').html(currentQuestion.answers.a2);
        $('#a3').html(currentQuestion.answers.a3);
        $('#a4').html(currentQuestion.answers.a4);
    
    });

    // choose answer //
    $('.answer-button').on('click', function(){
        // get answer-button with click
        var currentAnswer = $(this).attr('id');
        
        // check if answer right/wrong
        if (currentQuestion.correctAnswer === currentAnswer){
            console.log("you're right");
            // get result id, display 'right' in modal
            $('#result').html("You're right");
            // get points from data {object}
            currentPoints += currentQuestion.points;
            // add to score 
            $('#score').text(currentPoints);
                // console.log(currentPoints);
           } else {
            console.log("you're wrong");
            // get result id, display 'wrong' in modal
            $('#result').html("You're wrong");
            // get points from data {object}
            currentPoints -= currentQuestion.points;
            // add to score 
            $('#score').text(currentPoints);
                // console.log(currentPoints);
        }
            endGame(currentPoints);
            
        $('#modal1').modal('close');
        $('#modal2').modal('open');
    });

    // winner/loser // ?no loser?
    // if player reaches 1000 points  // winner modal
    function endGame(currentPoints){
          // console.log('its hitting endGame');
          if (currentPoints >= 1000){
            console.log('its hitting endGame');
            //console.log(currentPoints + 'test');
            $('#modal3').modal('open');
            $('#endgame').text('You WON!');
          };
      };
 
 // call modal //
    $('.modal').modal();
        
  
});





// reach:
// $('.button').off('click'); .hide() .text()
// var hiddenButtonText = clickedButtonId.html(' ');
      
