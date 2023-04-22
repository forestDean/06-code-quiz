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
}

startButton.addEventListener("click", function() {
    console.log('start');
    setTime();
    // start countdown timer
    // serve first question with 4 answers as buttons (random selection?)
    // store position on quiz array
});