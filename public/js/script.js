
// $(function(){

// QUESTION DATA //   
    var QuestionSet = [
            //column 1//
        {                    
            id: '1-1',
            question: 'This is a free, open-source front-end web design framework.',
            answers: { 
                a1: 'Beltstrap',
                a2: 'Bootstrap',
                a3: 'Bootstyle',
                a4: 'Brastrap'
            },
            correctAnswer: 'a2',
            points: 100
        },
        {
            id: '1-2',
            question: 'CSS stands for this.',
            answers: {
                a1: 'Cascading Style Sheet',
                a2: 'C Sharp Sharp',
                a3: 'Central Style Sheet',
                a4: 'Cascading Set Style'
            },
            correctAnswer: 'a1',
            points: 200
        },
        {
            id: '1-3',
            question: 'Link the CSS stylesheet in this HTML section.',
            answers: {
                a1: 'main',
                a2: 'body',
                a3: 'header',
                a4: 'head'
            },
            correctAnswer: 'a4',
            points: 300
        },
        {
            id: '1-4',
            question: 'The CSS selector for id.',
            answers: {
                a1: '.',
                a2: '$',
                a3: '#',
                a4: '*'
            },
            correctAnswer: 'a3',
            points: 400
        },
        {
            id: '1-5',
            question: 'A comment in HTML looks like this.',
            answers: {
                a1: '< ! - - comment - - >',
                a2: '/ * comment * /',
                a3: '/ / comment',
                a4: '\\ \\ comment'
            },
            correctAnswer: 'a1',
            points: 500
        },
            //column 2//
        {                    
            id: '2-1',
            question: 'The capital of Georgia.',
            answers: { 
                a1: 'Savannah',
                a2: 'Atlanta',
                a3: 'Hunstville',
                a4: 'Athens'
            },
            correctAnswer: 'a2',
            points: 100
        },
        {
            id: '2-2',
            question: 'Pierre is the capital of this state.',
            answers: {
                a1: 'Wyoming',
                a2: 'South Dakota',
                a3: 'North Dakota',
                a4: 'Idaho'
            },
            correctAnswer: 'a2',
            points: 200
        },
        {
            id: '2-3',
            question: "Iowa's state capital.",
            answers: {
                a1: 'Waterloo',
                a2: 'Cedar Falls',
                a3: 'Des Moines',
                a4: 'Columbus'
            },
            correctAnswer: 'a3',
            points: 300
        },
        {
            id: '2-4',
            question: 'The capital of Texas.',
            answers: {
                a1: 'Austin',
                a2: 'Dallas',
                a3: 'Santa Fe',
                a4: 'Fort Worth'
            },
            correctAnswer: 'a1',
            points: 400
        },
        {
            id: '2-5',
            question: 'Montpelier is the capital city of this state.',
            answers: {
                a1: 'Rhode Island',
                a2: 'Oregon',
                a3: 'New Hampshire',
                a4: 'Vermont'
            },
            correctAnswer: 'a4',
            points: 500
        },
            //column 3//
        {                    
            id: '3-1',
            question: '"Just keep swimming."',
            answers: { 
                a1: 'Jaws',
                a2: 'Flipper',
                a3: 'Finding Nemo',
                a4: 'Moana'
            },
            correctAnswer: 'a3',
            points: 100
        },
        {
            id: '3-2',
            question: '"There\'s no crying in baseball!"',
            answers: {
                a1: 'Moneyball',
                a2: 'The Natural',
                a3: 'The Sandlot',
                a4: 'A League of Their Own'
            },
            correctAnswer: 'a4',
            points: 200
        },
        {
            id: '3-3',
            question: '"Carpe diem! Sieze the day, boys. Make your lives extraordinary"',
            answers: {
                a1: 'Good Will Hunting',
                a2: 'Hook',
                a3: 'Dead Poets Society',
                a4: 'Good Morning Vietnam'
            },
            correctAnswer: 'a3',
            points: 300
        },
        {
            id: '3-4',
            question: '"It\'s alive! It\'s alive!"',
            answers: {
                a1: 'Frankenstein',
                a2: 'Tremors',
                a3: 'Godzilla',
                a4: 'The Mummy'
            },
            correctAnswer: 'a1',
            points: 400
        },
        {
            id: '3-5',
            question: '"Leave the gun, take the cannoli."',
            answers: {
                a1: 'The Untouchables',
                a2: 'The Godfather',
                a3: 'The Godfather Part II',
                a4: 'Goodfellas'
            },
            correctAnswer: 'a2',
            points: 500
        },
            //column 4//
        {                    
            id: '4-1',
            question: 'The language jQuery is written in.',
            answers: { 
                a1: 'Java',
                a2: 'JavaScript',
                a3: 'Python',
                a4: 'QueryScript'
            },
            correctAnswer: 'a2',
            points: 100
        },
        {
            id: '4-2',
            question: 'The operator used to assign a value to a variable.',
            answers: {
                a1: '*',
                a2: '==',
                a3: 'x',
                a4: '='
            },
            correctAnswer: 'a4',
            points: 200
        },
        {
            id: '4-3',
            question: 'Proper for loop syntax.',
            answers: {
                a1: 'four (var i = 0; i < 1000; i++)',
                a2: 'for (i = 0; i < 1000; i+)',
                a3: 'four ( i = 0; i < 1000; i+=)',
                a4: 'for (var i = 0; i < 1000; i++)'
            },
            correctAnswer: 'a4',
            points: 300
        },
        {
            id: '4-4',
            question: 'Javascript is a ____ side language.',
            answers: {
                a1: 'client',
                a2: 'right',
                a3: 'server',
                a4: 'blind'
            },
            correctAnswer: 'a1',
            points: 400
        },
        {
            id: '4-5',
            question: 'Set the background color to red.',
            answers: {
                a1: '.style(backgroundColor, red);',
                a2: '.style("background-color","red");',
                a3: '.css("background-color","red");',
                a4: '.layout("background-color","red");'
            },
            correctAnswer: 'a3',
            points: 500
        },
            //column 5//
        {                    
            id: '5-1',
            question: 'The death of this person triggered World War I.',
            answers: { 
                a1: 'Franz Ferdinand',
                a2: 'Czar Nicholas II',
                a3: 'Vladimir Lenin',
                a4: 'Winston Churchill'
            },
            correctAnswer: 'a1',
            points: 100
        },
        {
            id: '5-2',
            question: 'Columbus sailed the ocean blue.',
            answers: {
                a1: '1592',
                a2: '1492',
                a3: '1942',
                a4: '1662'
            },
            correctAnswer: 'a2',
            points: 200
        },
        {
            id: '5-3',
            question: 'The Hundred Years War was fought between these two countries.',
            answers: {
                a1: 'France and Italy',
                a2: 'England and Germany',
                a3: 'France and England',
                a4: 'England and Ireland'
            },
            correctAnswer: 'a3',
            points: 300
        },
        {
            id: '5-4',
            question: 'King Henry VIII had this many wives.',
            answers: {
                a1: '8',
                a2: '5',
                a3: '11',
                a4: '6'
            },
            correctAnswer: 'a4',
            points: 400
        },
        {
            id: '5-5',
            question: 'The first Western explorer to reach China.',
            answers: {
                a1: 'Marco Polo',
                a2: 'James Cook',
                a3: 'Ferdinand Magellan',
                a4: 'Amerigo Vespucci'
            },
            correctAnswer: 'a1',
            points: 500
        }
    ];
    
// GAMEPLAY ///

$(function(){
    
    var currentQuestion = null;
    var clickedButtonId = null;
    var currentPoints = 0;

    // choose points button  // Liam helped organize this function quite a bit
    $('.button').on('click', function(){
        // set button clicked as var
        clickedButtonId = $(this).attr('id');
        // find question data {object} with button var
        currentQuestion = QuestionSet.find(function(object) {       
                console.log('question');
            return object.id === clickedButtonId;
        });
        console.log(currentQuestion);
     
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
        console.log('current answer is ' + currentAnswer);
        console.log('correct answer is ' + currentQuestion.correctAnswer);
        console.log('also, currentQuestion is ');
        console.log(currentQuestion);
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
        if (currentPoints <= 0) {
            $('#score').css('color', 'red');
        } else if (currentPoints > 0){
            $('#score').css('color', 'white');
        };

        endGame(currentPoints);

        // if (currentPoints <= 0) {
        //     $('#score').css('color', 'red');
        // };

        $('#modal1').modal('close');
        $('#modal2').modal('open');
        $('#' + clickedButtonId).css('color', '#4a4e84');  // from David 
        $('#' + clickedButtonId).prop('disabled', true);   // from David

    });

    // winner/loser 
    // if player reaches 1000 points  // winner modal
    function endGame(currentPoints){
          // console.log('its hitting endGame');
          if (currentPoints >= 50000){
            console.log('its hitting endGame');
            //console.log(currentPoints + 'test');
            $('#modal3').modal('open');
            $('#endgame').text('You WON!');
          };
      };
 
 // call modal //
    $('.modal').modal({
        inDuration: 0, // Transition in duration
        outDuration: 0, // Transition out duration
    });
  

    // $('#modal1').modal({
    //     inDuration: 0, // Transition in duration
    //     outDuration: 0, // Transition out duration
    // });
    // $('#modal2').modal({
    //     inDuration: 0, // Transition in duration
    //     outDuration: 0, // Transition out duration
    // });
    // $('#modal3').modal({
    //     inDuration: 0, // Transition in duration
    //     outDuration: 0, // Transition out duration
    // });

});