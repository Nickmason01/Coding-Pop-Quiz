var startButton =document.querySelector(".start-button");
var timerEl =document.querySelector(".timer-option");
var highScore = document.querySelector(".score-btn");
var questionText = document.getElementById("#questions-option");
var answerOptions = document.querySelectorAll(".answer-options");

var timerCount;
var timer;
var question = []
var indexQuestion= 0 

var possibleQuestions = [
    
    {
        question : "Commonly used data types DO NOT include",
            optionA: "Boolean", 
            optionB : "numbers",
            optionC : "strings", 
            optionD: "alerts", 
             correct: "alerts"
            
        
        
    },

    {
        question: "The condition of an If/Else statement is enclosed within ",
            optionA : "commas", 
            optionB: "quotes", 
            optionC: "parentheses", 
            optionD : "curly brackets", 
            correct: "parentheses"
            
        
       
    },

    {
        question : "Arrays in Javascript can be used to store ",
            optionA : "numbers and strings",
             optionB: "other arrays", 
            optionC: "booleans", 
            optionD : "all the above",
            correct : "all of the above"
          
        
       
    },

    {
        question : "String values must be enclosed by _____ when assigned as values",
            optionA: "parentheses", 
            optionB: "quotes", 
            optionC: "sqaure brackets", 
            optionD :"none of the above",
            correct : "quotes"
            
        
    },

    {
        question : "A very useful tool during development and debugging for printing content to the debugger is", 
            optionA: "HTML",
            optionB: "for loops",
            optionC: "console.log",
            optionD : "Javascript",
            correct : "console.log"
            
        
     
    },

]



function startQuiz() {
    timerCount = 60;
    startButton.setAttribute("style", "display: none");
    renderQuestion ();
    startTimer ();
    
}

function startTimer() {
    timer =setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount + " seconds remaining";
        if (timerCount === 0) {
            clearInterval(timer);
            gameOver ();
        }


    }, 1000);
    
}


function renderQuestion () {
currentQuestion =possibleQuestions[indexQuestion];
question.textContent =currentQuestion.question;
for (index =0; index < currentQuestion.length, i++);

}

function userAnswer () {

}

function nextQuestion () {
    
}

function gameOver () {

}




startButton.addEventListener("click", startQuiz);
