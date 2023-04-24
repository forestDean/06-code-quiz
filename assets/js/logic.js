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
var quCounter;
var correctSound = new Audio('./assets/sfx/correct.wav');
var incorrectSound = new Audio('./assets/sfx/incorrect.wav');

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
function quizRoll(quNo,quCounter) {
    quCounter++;
    console.log('quCounter : ' +quCounter);
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
            correct(quNo,quCounter);
            console.log('correct answerButton');
        } else { 
            timeLeft -= 10;
            //console.log('quNo Wrong0: ' + quNo);
            wrong(quNo,quCounter);
            
        }
        });
    }
};

startButton.addEventListener("click", function() {
    //console.log('start');
    setTime();
    quCounter = 0;
    quizRoll(0,0);
    // serve first question with 4 answers as buttons (random selection?)
    // store position on quiz array
});

function correct(quNo,quCounter){
    feedback.textContent = "Correct!";
    feedback.setAttribute("style", "display: inline-block; background-color: rgb(114, 177, 248);");
    // play sound
    correctSound.play();
    // pop question from quiz   `
    //log score

    if (quCounter <5){
    //quCounter++;
    //advance question
    quNo++;
    //console.log('quNo: ' + quNo);
    setTimeout(quizRoll, 1000, quNo, quCounter); 
    };
    //console.log('endGame');
    // endGame();
}

function wrong(quNo,quCounter){;
   feedback.textContent = "Wrong!";
   feedback.setAttribute("style", "display: inline-block; background-color: rgb(248, 114, 114);");
   // play sound
   incorrectSound.play();
   // set state to false 
   quiz[quNo].state = false;

   if (quCounter <5){
    //quCounter++;
    //advance question
    quNo++;
    //console.log('quNo: ' + quNo);
    setTimeout(quizRoll, 1000, quNo, quCounter); 
    };
    //console.log('endGame');
    // endGame(); 
}

function gameOver(){
    clearContent(questionsQu);
    clearContent(questionsCh);
    feedback.textContent = "GAME OVER!";
    feedback.setAttribute("style", "display: inline-block; background-color: rgb(248, 114, 114);");
    // save timer score  
    // reset quCounter   
}

function clearContent(element){
while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
}