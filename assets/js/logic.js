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

var bt1 = document.createElement("button");
var bt2 = document.createElement("button");
var bt3 = document.createElement("button");
var bt4 = document.createElement("button");

var timeLeft = 60;
function setTime() {
//var timeLeft = 60;
var countDown = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 0){
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
    questionsBox.setAttribute("style", "display: inline;");
    questionsQu.textContent = quiz[quNo].question;
    //feedback.setAttribute("style", "display: inline-block;");
        console.log('question: ' + questionsQu.textContent);
        console.log('quiz.length: ' + quiz.length);
        console.log('answers: ' + quiz[0].choice);
    //console.log('answers: ' + quiz[1].choice);
    //var answers = [quiz[0].choice];
    //typeof(answers);
    // var answer = answers[0][0];
    // console.log('answer: ' + answer);
    //var answer2 = answers[0][0];
    console.log('answer2: ' + quiz[0].choice[0]);
    console.log('answer3: ' + quiz[0].choice[1]);
    console.log(quNo);

    // create 4 buttons with answer 
    // add with loop
   // for (i=1; i <= 4; i++) {
        var i = 1;
        var btX = ('bt' + i);
        console.log(btX);
        questionsCh.appendChild(btX);
        // questionsCh.appendChild(bt2);
        // questionsCh.appendChild(bt3);
        // questionsCh.appendChild(bt4);
        btX.setAttribute("class", "select");
        // select from choice array
        btX.setAttribute("data-value", quiz[quNo].choice[i]);
        // bt2.setAttribute("class", "select");
        // bt2.setAttribute("data-value", "Welsh Rarebit");
        
        // add with loop
        btX.textContent =  i + ". " + quiz[quNo].choice[i];
        // bt2.textContent =  "2. Welsh Rarebit";
        // bt3.textContent =  "3. Kedgeree";
        // bt4.textContent =  "4. Banana and Custard";

        btX.addEventListener('click', function() {
        var check = btX.getAttribute("data-value");
        if (quiz[i].answer === check) {
            correct();
            //console.log('correct bt1');
        } else {
            //feedback.setAttribute.backgroundColor ="red";
            wrong();
            timeLeft -= 10;
        }
        });
   // }
    // bt2.addEventListener('click', function() {
    //     var check = bt2.getAttribute("data-value");
    //     if (quiz[0].answer === check) {
    //         correct();
    //         //console.log('correct');
    //     } else {
    //         feedback.setAttribute.backgroundColor ="red";
    //         wrong();
    //         timeLeft -= 10;
    //     }
    //     });
};

startButton.addEventListener("click", function() {
    console.log('start');
    setTime();
    quizRoll(0);
    // serve first question with 4 answers as buttons (random selection?)
    // store position on quiz array
});

function correct(){
    feedback.textContent = "Correct!";
    feedback.setAttribute("style", "display: inline-block; background-color: rgb(114, 177, 248);");
    //log score
    //advance question
    quNo++;
    console.log('quNo: ' + quNo);
    setTimeout(quizRoll, 2000);
    //feedback.removeChild();
    //feedback.setAttribute("style", "display: none");
}

function wrong(){
   feedback.textContent = "Wrong!";
   feedback.setAttribute("style", "display: inline-block; background-color: rgb(248, 114, 114);");
   // set state to false 
   //advance question
   quNo++;
   setTimeout(quizRoll, 2000);  
}

function gameOver(){
   feedback.textContent = "GAME OVER!";
   feedback.setAttribute("style", "display: inline-block; background-color: rgb(248, 114, 114);");
   
    
}