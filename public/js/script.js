

var questionSet= {
    question: 'Question??',
    multipleAnswers: ['Answer 1', 'Answer 2', 'Answer 3'],
    correctAnswer: 'Answer 2'
}


$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close');
  });
      
