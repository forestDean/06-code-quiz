var highScoreArray = JSON.parse(localStorage.getItem("hScores"));
console.log('highScoreArray  : ' + highScoreArray );
console.log('highScoreArray.length : ' + highScoreArray.length);

var clearButton = document.querySelector("#clear");


// Create ordered list element
//var listHs = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

    // Append ordered list 
    var highScores = document.getElementById("highscores")
    //highScores.appendChild(listHs);
    // highScores.appendChild(li1);
    // li1.textContent = "test";
    // highScores.appendChild(li2);
    // li2.textContent = "test";
    // highScores.appendChild(li3);
    // li3.textContent = "test";
    // highScores.appendChild(li4);
    // li4.textContent = "test";
    // console.log('highScores');

    for (var i=0; i < highScoreArray.length; i++) {
    //for (var i=0; i <= 4; i++) {
        //var i = 0;
        //var answerButton = ('bt' + i);
        // console.log(answerButton);

        var scoreLi = document.createElement("li");
        highScores.appendChild(scoreLi);
        //answerButton.setAttribute("class", "select");
        // select from choice array
        //answerButton.setAttribute("data-value", quiz[quNo].choice[i]);
        scoreLi.textContent =  highScoreArray[i];    
        }


    //iterate through highScoreArray
    //limit array to 50 results

    //addeventListener to Clear Button
    clearButton.addEventListener("click", function(){
        // save empty highScoreArray 
        console.log('CLEARED');
        localStorage.clear();
    });