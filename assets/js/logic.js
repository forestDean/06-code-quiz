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
    countDown = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 0){
        score = timeLeft;
        timer.textContent = 0;  
        clearInterval(countDown);
        gameOver(score);
    }
    return timeLeft; 
  }, 1000);
};

function quizRoll(quNo,quCounter) {
    quCounter++;
    // set 5 questions per quiz
    if (quCounter <= 5) { 
        // reset
        feedback.setAttribute("style", "display: none");
        startScreen.setAttribute("style", "display: none;");
        questionsBox.setAttribute("style", "display: inline;");
        //clear previous answer buttons
        clearContent(questionsCh);
        questionsQu.textContent = quiz[quNo].question;

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
            } else { 
                timeLeft -= 10;
                wrong(quNo,quCounter);
                
            }
            });
        }
    } else {
        score = timeLeft;
        gameOver(score);
    }
};

startButton.addEventListener("click", function() {
    if (quNo >= 15) {
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

    if (quCounter <= 5){
    //quCounter++;
    //advance question
    quNo++;
    setTimeout(quizRoll, 1000, quNo, quCounter); 
    };
}

function wrong(quNo,quCounter){;
   feedback.textContent = "Wrong!";
   feedback.setAttribute("style", "display: inline-block; background-color: rgb(248, 114, 114);");
   // play sound
   incorrectSound.play();
   // set state to false 
   quiz[quNo].state = false;

   if (quCounter <= 5){
    //advance question
    quNo++;
    setTimeout(quizRoll, 1000, quNo, quCounter); 
    };
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
    return score;
  
}

function clearContent(element){
while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
}

var highScoreArray;
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
