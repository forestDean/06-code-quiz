//var startScreenElement = document.querySelector("#scores");
var timer = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsBox = document.querySelector("#questions");
var questionsQu = document.querySelector("#question-title");
var questionsCh = document.querySelector("#choices");

var endScreen = document.querySelector("#end-screen");
var submitButton = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");

// Create ordered list element
var listCh = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var bt1 = document.createElement("button");
var bt2 = document.createElement("button");
var bt3 = document.createElement("button");
var bt4 = document.createElement("button");

//var timeLeft = 60;
function setTime() {
var timeLeft = 60;
var countDown = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0){
      clearInterval(countDown);
      //displayMessage();
    }
  }, 1000);
};

function quizRoll() {
    // div class="start-screen" hide
    startScreen.setAttribute("style", "display: none;");
    // div id="questions" show
    questionsBox.setAttribute("style", "display: inline;");
    questionsQu.textContent = 'First Question?';
    // create 4 buttons with answer 
    // Append ordered list 
    // questionsCh.appendChild(listCh);
    // listCh.appendChild(li1);
    // listCh.appendChild(li2);
    // listCh.appendChild(li3);
    // listCh.appendChild(li4);
    questionsCh.appendChild(bt1);
    questionsCh.appendChild(bt2);
    questionsCh.appendChild(bt3);
    questionsCh.appendChild(bt4);
    bt1.setAttribute("value", "Pizza")

    
    

    bt1.textContent =  "1. Pizza";
    bt2.textContent =  "2. Welsh Rarebit";
    bt3.textContent =  "3. Kedgeree";
    bt4.textContent =  "4. Banana and Custard";
};

startButton.addEventListener("click", function() {
    console.log('start');
    setTime();
    quizRoll();
    // serve first question with 4 answers as buttons (random selection?)
    // store position on quiz array
});

startButton.addEventListener("click", function() {
    console.log('start');
    setTime();
    quizRoll();
    // serve first question with 4 answers as buttons (random selection?)
    // store position on quiz array
});