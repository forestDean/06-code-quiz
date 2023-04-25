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
var score;
var countDown;




function setTime() {
//var timeLeft = 60;
    countDown = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 0){
        score = timeLeft;
        timer.textContent = 0;  
        clearInterval(countDown);
        gameOver(score);
    }
    return timeLeft; //is this needed
  }, 1000);
};

function quizRoll(quNo,quCounter) {
    quCounter++;
    // set 5 questions per quiz
    if (quCounter <= 5) { 
        //console.log('quCounter : ' +quCounter);
        // reset
        feedback.setAttribute("style", "display: none");
        startScreen.setAttribute("style", "display: none;");
        questionsBox.setAttribute("style", "display: inline;");
        //clear previous answer buttons
        clearContent(questionsCh);
            //console.log('quNo: ' + quNo);
        questionsQu.textContent = quiz[quNo].question;

            // console.log('question: ' + questionsQu.textContent);
            // console.log('quiz.length: ' + quiz.length);
            // console.log('answers: ' + quiz[quNo].choice);
            // console.log('answer : ' + quiz[quNo].answer);


        // create 4 buttons with answer 
        for (var i=0; i <= 3; i++) {
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
                //console.log('correct answerButton');
            } else { 
                timeLeft -= 10;
                wrong(quNo,quCounter);
                
            }
            });
        }
    } else {
        score = timeLeft;
        gameOver(score);
        // console.log('timeLeft: ' + timeLeft);
        // console.log('final score0 : ' + score);
    }
};

startButton.addEventListener("click", function() {
    //console.log('start');
    if (quNo >= 20) {
        quNo = 0;
    };
    setTime();
    quCounter = 0;
    quizRoll(0,0);
});

function correct(quNo,quCounter){
    feedback.textContent = "Correct!";
    feedback.setAttribute("style", "display: inline-block; background-color: rgb(114, 177, 248);");
    // play sound
    correctSound.play();
    // pop question from quiz   `
    //log score

    if (quCounter <= 5){
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

   if (quCounter <= 5){
    //quCounter++;
    //advance question
    quNo++;
    //console.log('quNo: ' + quNo);
    setTimeout(quizRoll, 1000, quNo, quCounter); 
    };
    //console.log('endGame');
    // endGame(); 
}

function gameOver(score){   
    // reset timer
    timer.textContent = 0;  
    clearInterval(countDown);
    // reset questions
    clearContent(questionsQu);
    clearContent(questionsCh);
    quCounter = 0;
    // render EndScreen
    questionsBox.setAttribute("style", "display: none;");
    feedback.setAttribute("style", "display: none;");
    endScreen.setAttribute("style", "display: inline;");
    gameOverAlert = document.getElementById("gameover");
    gameOverAlert.textContent = "GAME OVER!";
    myScore = document.getElementById("final-score");
    myScore.textContent = score;

    // save timer score 
    //console.log('final score1 : ' + score);
    return score;
  
}

function clearContent(element){
while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
}

var highScoreArray;
//var highScoreArray = [];
function addScore(event){
    event.preventDefault(); 
    // add initial
    var userName = document.getElementById('initials').value;
    userName = userName.toUpperCase();
    var stringScore = JSON.stringify(score);
    var yourScore =  userName  + ' - ' + stringScore;
    console.log(yourScore);

    var highScoreArray = JSON.parse(localStorage.getItem("hScores"));
    if (highScoreArray == null) {
        highScoreArray = [];
    }
    // append to highScoreArray
    console.log('highScoreArray : ' + highScoreArray);
    highScoreArray.unshift(yourScore);
    highScoreArray = highScoreArray.slice(0, 20); // limit to 20 highscores
    console.log(highScoreArray);
    localStorage.setItem("hScores",JSON.stringify(highScoreArray));

    // go to highscores.html
    window.location.href = "highscores.html";
}

    // addeventListener to Submit
    submitButton.addEventListener("click", addScore)
