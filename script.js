var startButton =document.querySelector(".start-button");
var timerEl =document.querySelector(".timer-text");
var highScore = document.querySelector(".score-btn");
var question = document.getElementById("#questions-text");
var answerOptions = document.querySelector(".answer-options");

var timerCount;
var timer;
var firstQuestion = "";

var possibleQuestions = [
    
    {
        question : "Commonly used data types DO NOT include",
        answers : [
            {text : "Boolean", correct: false},
            {text : "numbers", correct: false},
            {text : "strings", correct: false},
            {text: "alerts", correct: true}
        ]
        
    },

    {
        question: "The condition of an If/Else statement is enclosed within ",
        answers : [
            {text : "commas", correct: false},
            {text: "quotes", correct: false},
            {text: "parentheses", correct: true},
            {text : "curly brackets", correct: false}
        ]
       
    },

    {
        question : "Arrays in Javascript can be used to store ",
        answers : [
            {text : "numbers and strings", correct: false},
            { text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text : "all the above", correct: true}
        ]
       
    },

    {
        question : "String values must be enclosed by _____ when assigned as values",
        answers: [
            {text : "parentheses", correct: false},
            { text: "quotes", correct: true},
            { text: "sqaure brackets", correct: false},
            {text :"none of the above", correct: false}
        ]
        
    },

    {
        question : "A very useful tool during development and debugging for printing content to the debugger is",
        answer: [
            {text : "HTML", correct: false},
            {text: "for loops", correct: false},
            {text: "console.log", correct: true},
            {text : "Javascript", correct: false}
        ]
     
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
        }


    }, 1000);
    
}


function renderQuestion () {
    
}

function nextQuestion () {
    
}




startButton.addEventListener("click", startQuiz);
