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
    highScores.appendChild(li1);
    li1.textContent = "test";
    highScores.appendChild(li2);
    li2.textContent = "test";
    highScores.appendChild(li3);
    li3.textContent = "test";
    highScores.appendChild(li4);
    li4.textContent = "test";
    console.log('highScores');

    //iterate through highScoreArray
    //limit array to 50 results

    //addeventListener to Clear Button
    clearButton.addEventListener("click", function(){
        // save empty highScoreArray 
        console.log('CLEARED');
    });