var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector("#timer-text");
var highScore = document.querySelector(".score-btn");
var questionText = document.getElementById("questions-text");
var answerOptions = document.querySelector(".answer-options");
var scoresBtn = document.querySelector(".scores-btn");


var timerCount;
var timer;
let indexQuestion = 0;
var score = 0;
var possibleQuestions = [

    {
        question: "Commonly used data types DO NOT include",
        options: [
            "Boolean",
            "numbers",
            "strings",
            "alerts",



        ],
        answer: "alerts"



    },

    {
        question: "The condition of an If/Else statement is enclosed within ",
        options: [
            "commas",
            "quotes",
            "parentheses",
            "curly brackets",

        ],
        answer: "parentheses"



    },

    {
        question: "Arrays in Javascript can be used to store ",
        options: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        answer: "all of the above"




    },

    {
        question: "String values must be enclosed by _____ when assigned as values",
        options: [
            "parentheses",
            "quotes",
            "square brackets",
            "none of the above",

        ],
        answer: "quotes"


    },

    {
        question: "A very useful tool during development and debugging for printing content to the debugger is",
        options: [
            "HTML",
            "for loops",
            "console.log",
            "Javascript",

        ],
        answer: "console.log"



    },

]



function startQuiz() {
    timerCount = 60;
    startButton.setAttribute("style", "display: none");
    renderQuestion();
    startTimer();

}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount + " seconds remaining";
        if (timerCount === 0) {
            clearInterval(timer);
            gameOver();
        }


    }, 1000);

}


function renderQuestion() {
    //  button.setAttribute("onclick", "userAnswer()");
    var currentQuestion = possibleQuestions[indexQuestion];
    questionText.textContent = currentQuestion.question;
    answerOptions.innerHTML = "";
    for (let index = 0; index < currentQuestion.options.length; index++) {
        var button = document.createElement("button");
        button.textContent = currentQuestion.options[index];
        button.addEventListener("click", function () { userAnswer(currentQuestion.options[index]) });
        answerOptions.appendChild(button);
    }


}
console.log(renderQuestion);

function userAnswer(answer) {
    var currentAnswer = possibleQuestions[indexQuestion].answer;
    if (answer === currentAnswer){
        score++; 
        console.log(score)
       // var tag = document.createElement("p");
      // var text= document.createTextNode("correct!");
       //tag.appendChild(text);
       // var element = document.getElementById("correct-not-correct");
//element.appendChild(text);
        

    }else{
        timerCount -=10;
    }
    //if(timerCount===0 || indexQuestion === 6) {
       // clearInterval(renderQuestion);
       // gameOver();
    //}
        //console.log("correct")
        //console.log("not correct")
        indexQuestion++
        if(indexQuestion >= possibleQuestions.length) {
            questionText.remove()
            answerOptions.remove()
            gameOver();
        }else{
            renderQuestion();

        }
        
}

function gameOver() {
timerEl.remove()
    console.log("Gameover")

}

function highScores () {

}



startButton.addEventListener("click", startQuiz);
scoresBtn.addEventListener("click", highScores)

