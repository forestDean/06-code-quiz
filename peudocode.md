# 06 Code Quiz
## Acceptance Criteria
 
* A start button that when clicked a timer starts and the first question appears.
* Questions contain buttons for each answer.
* When answer is clicked, the next question appears
* If the answer clicked was incorrect then <mark>subtract time from the clock</mark>
* The quiz should end when all questions are answered or the timer reaches 0.
* When the game ends, it should display their score and give the user the ability to save their initials and their score 

## PseudoCode

* questions as object arrays
    * 5 questions with 4 multiple-choice answers
* 60 second countdown timer
* `Start Quiz` on click...
    * start countdown timer
    * serve first question with 4 answers as buttons (random selection?)
    * store position on quiz array

* `Answer` on click...
    * display `wrong` or `correct`
    * play sound
    * if `wrong` deduct 10 seconds from the clock and set state to `false`<mark>(what if clock less than 10?)</mark>
    * if `correct` pop the question from the array
    * display result
    * store result
    * advance to next question on quiz array
* repeat for length of quiz array
    * stop clock on last answer

* at end of quiz <mark>OR</mark> if timeout
* display `all done` and`final score`
* render signature input form
* `Submit`...
    * store signature
    * go to highscores.html
* `Highscores`...
    * render `High Scores` - highest first
    * render `Go Back` replay button
    * render `Clear Scores` button
* `Clear Scores` on click...
    * clear memory
    * reset state to `true`
* `Go Back` on click...
    * return to index.html
    * serve next question with 4 answers as buttons