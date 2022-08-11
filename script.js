var startButton =document.querySelector(".start-button");
var timerEl =document.querySelector("#timer-text");
var highScore = document.querySelector(".score-btn");
var questionText = document.getElementById("questions-text");
var answerOptions = document.querySelector(".answer-options");

var timerCount;
var timer;
//var question = []
var indexQuestion = 0; 
var score = 0;
var possibleQuestions = [
    
    {
        question : "Commonly used data types DO NOT include",
        options : [ 
            "Boolean",
            "numbers",
            "strings",
            "alerts",



        ],
        answer: "alerts"
           
        
        
    },

    {
        question: "The condition of an If/Else statement is enclosed within ",
        options : [
            "commas",
            "quotes",
            "parentheses",
            "curly brackets",

        ],
        answer: "parentheses"
           
        
       
    },

    {
        question : "Arrays in Javascript can be used to store ",
        options : [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all the above",
        ], 
        answer: "all of the above"
            
          
        
       
    },

    {
        question : "String values must be enclosed by _____ when assigned as values",
        options : [
            "parentheses",
            "quotes",
            "square brackets",
            "none of the above",

        ],
        answer:"quotes"
           
        
    },

    {
        question : "A very useful tool during development and debugging for printing content to the debugger is", 
        options : [
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
 var currentQuestion = possibleQuestions[indexQuestion];
 questionText.textContent = currentQuestion.question;
  for (let index = 0; index < currentQuestion.options.length; index++) {
 var button = document.createElement("button");
 button.textContent = currentQuestion.options[index];
 answerOptions.appendChild(button);
}


}
console.log(renderQuestion);

function userAnswer () {
    var currentAnswers=possibleQuestions[indexQuestion];
    answerOptions.textContent=currentAnswers.options;
    for(let index =0; index < currentAnswers.options.length; index++){
        if(timerCount ===0){
            return;
        }
    
    
        if(answerOptions === answer){
            score++;
        }

    }

   


}
console.log (score)
function nextQuestion () {
    
}

function gameOver () {

}




startButton.addEventListener("click", startQuiz);
answerOptions.addEventListener("click", userAnswer);