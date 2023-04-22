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

// // Create ordered list element
// var listCh = document.createElement("ol");
// // Create ordered list items
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

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

function quizRoll() {
    // reset feedback
    feedback.setAttribute("style", "display: none");
    // div class="start-screen" hide
    startScreen.setAttribute("style", "display: none;");
    // div id="questions" show
    questionsBox.setAttribute("style", "display: inline;");
    questionsQu.textContent = quiz[0].question;
    //feedback.setAttribute("style", "display: inline-block;");

    // create 4 buttons with answer 
    // add with loop
    //for (i=0; i > quiz.length; i++)
    console.log('quiz.length: ' + quiz.length);
    questionsCh.appendChild(bt1);
    questionsCh.appendChild(bt2);
    questionsCh.appendChild(bt3);
    questionsCh.appendChild(bt4);
    bt1.setAttribute("class", "select");
    bt1.setAttribute("data-value", "Paris");
    bt2.setAttribute("class", "select");
    bt2.setAttribute("data-value", "Welsh Rarebit");
    
    // add with loop
    bt1.textContent =  "1. Paris";
    bt2.textContent =  "2. Welsh Rarebit";
    bt3.textContent =  "3. Kedgeree";
    bt4.textContent =  "4. Banana and Custard";

    bt1.addEventListener('click', function() {
    var check = bt1.getAttribute("data-value");
    if (quiz[0].answer === check) {
        correct();
        //feedback.setAttribute("style", "backgroundColor: rgb(114, 177, 248);");
        console.log('correct bt1');
    }
    });

    bt2.addEventListener('click', function() {
        var check = bt2.getAttribute("data-value");
        if (quiz[0].answer === check) {
            correct();
            //console.log('correct');
        } else {
            feedback.setAttribute.backgroundColor ="red";
            wrong();
            timeLeft -= 10;
        }
        });
};

startButton.addEventListener("click", function() {
    console.log('start');
    setTime();
    quizRoll();
    // serve first question with 4 answers as buttons (random selection?)
    // store position on quiz array
});

function correct(){
    feedback.textContent = "Correct!";
    feedback.setAttribute("style", "display: inline-block; background-color: rgb(114, 177, 248);");
    //log score
    setTimeout(quizRoll, 2000);
    //feedback.removeChild();
    //feedback.setAttribute("style", "display: none");
}

function wrong(){
   feedback.textContent = "Wrong!";
   feedback.setAttribute("style", "display: inline-block; background-color: rgb(248, 114, 114);");
   // set state to false 
   setTimeout(quizRoll, 2000);  
}

function gameOver(){
   feedback.textContent = "GAME OVER!";
   feedback.setAttribute("style", "display: inline-block; background-color: rgb(248, 114, 114);");
   
    
}