//var startScreenElement = document.querySelector("#scores");
var timer = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsBox = document.querySelector("#questions");
var questionsQu = document.querySelector("#question-title");
var questionsCh = document.querySelector("#choices");
var selectCh = document.querySelectorAll(".select");

var endScreen = document.querySelector("#end-screen");
var submitButton = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");

var quNo;

var timeLeft = 60;
function setTime() {
//var timeLeft = 60;
var countDown = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 0){
        timer.textContent = 0;
        clearInterval(countDown);
        gameOver();
    }
  }, 1000);
};

//var quNo = 0;
function quizRoll(quNo) {
    // reset feedback
    feedback.setAttribute("style", "display: none");
    // div class="start-screen" hide
    startScreen.setAttribute("style", "display: none;");
    // div id="questions" show
    //questionsBox.setAttribute("style", "display: none;")
    questionsBox.setAttribute("style", "display: inline;");
    //clear previous answer buttons
    while (questionsCh.hasChildNodes()) {
        questionsCh.removeChild(questionsCh.firstChild);
      }
        console.log('quNo: ' + quNo);
    questionsQu.textContent = quiz[quNo].question;
    //feedback.setAttribute("style", "display: inline-block;");
        console.log('question: ' + questionsQu.textContent);
        console.log('quiz.length: ' + quiz.length);
        console.log('answers: ' + quiz[quNo].choice);
        console.log('answer : ' + quiz[quNo].answer);


    // create 4 buttons with answer 
    // add with loop
    for (var i=0; i <= 3; i++) {
        //var i = 0;
        //var answerButton = ('bt' + i);
        // console.log(answerButton);

        var answerButton = document.createElement("button");
        questionsCh.appendChild(answerButton);
        answerButton.setAttribute("class", "select");
        // select from choice array
        answerButton.setAttribute("data-value", quiz[quNo].choice[i]);
        answerButton.textContent =  i+1 + ". " + quiz[quNo].choice[i];

        answerButton.addEventListener('click', function() {
        var check = this.getAttribute("data-value");
        if (quiz[quNo].answer === check) {
            correct(quNo);
            console.log('correct answerButton');
        } else { 
            timeLeft -= 10;
            //console.log('quNo Wrong0: ' + quNo);
            wrong(quNo);
            
        }
        });
    }
};

startButton.addEventListener("click", function() {
    //console.log('start');
    setTime();
    quizRoll(0);
    // serve first question with 4 answers as buttons (random selection?)
    // store position on quiz array
});

function correct(quNo){
    feedback.textContent = "Correct!";
    feedback.setAttribute("style", "display: inline-block; background-color: rgb(114, 177, 248);");
    // pop question from quiz
    //log score

    //advance question
    quNo++;
    console.log('quNo: ' + quNo);
    setTimeout(quizRoll, 1000, quNo); 
}

function wrong(quNo){;
   feedback.textContent = "Wrong!";
   feedback.setAttribute("style", "display: inline-block; background-color: rgb(248, 114, 114);");
   // set state to false 
   quiz[quNo].state = false;
   //advance question
   quNo++;
   setTimeout(quizRoll, 1000, quNo);  
}

function gameOver(){
   feedback.textContent = "GAME OVER!";
   feedback.setAttribute("style", "display: inline-block; background-color: rgb(248, 114, 114);");
   
    
}