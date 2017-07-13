
$(function(){

 // question data //   
    var QuestionSet = [
        {
            id: "1-1",
            question: "question 1",
            answers: {
                a1: "answer1",
                a2: "answer2",
                a3: "answer3",
                a4: "answer4"
            },
            correctAnswer: "a1",
            points: "$100"
        },
        {
            id: "1-2",
            question: "question 2",
            answers: {
                a1: "answer1",
                a2: "answer2",
                a3: "answer3",
                a4: "answer4"
            },
            correctAnswer: "a2",
            points: "$200"
        },
        {
            id: "1-3",
            question: "question 3",
            answers: {
                a1: "answer1",
                a2: "answer2",
                a3: "answer3",
                a4: "answer4"
            },
            correctAnswer: "a3",
            points: "$300"
        },
        {
            id: "1-4",
            question: "question 4",
            answers: {
                a1: "answer1",
                a2: "answer2",
                a3: "answer3",
                a4: "answer4"
            },
            correctAnswer: "a4",
            points: "$400"
        },
        {
            id: "1-5",
            question: "question 5",
            answers: {
                a1: "answer1",
                a2: "answer2",
                a3: "answer3",
                a4: "answer4"
            },
            correctAnswer: "a1",
            points: "$500"
        }
    ];
    
    // click button
    $(".button").on("click", function(){
        // get question data {object} with click
        var clickedButtonId = $(this).attr("id");
        var currentQuestion = QuestionSet.find(function(object) {       
            return object.id === clickedButtonId;
        });
        // fill in question modal
        $("#question").html(currentQuestion.question);
        $("#a1").html(currentQuestion.answers.a1);
        $("#a2").html(currentQuestion.answers.a2);
        $("#a3").html(currentQuestion.answers.a3);
        $("#a4").html(currentQuestion.answers.a4);
    });
 // choose points button //

 // choose answer //

 // answer value //

 // fire modal //
    $('.modal').modal();

 // scoring //

 // winner/loser //

});



      
