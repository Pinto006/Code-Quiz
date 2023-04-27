const quiz = document.getElementById("quiz");
var quizContent = document.querySelector(".Questions");
var timeEl = document.querySelector("#game-clock");
var question = document.querySelector("#question");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var startBtn = document.getElementById("start-btn");
const choices = document.querySelectorAll("#options");
const results = document.getElementById('quizFinish');
const highScores = document.getElementById('highScore');
var answerbutton = document.createElement('button');
var currentQuestion = 0;
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0
var secondsLeft = 60;
var availableQuestion = [];
var questions = [
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: {
            a: 'var',
            b: 'let',
            c: 'Both A and B'
        },
        correctAnswer: 'Both A and B'

    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: {
            a: 'getElementbyId()',
            b: 'getElementsByClassName()',
            c: 'Both A and B'
        },
        correctAnswer: 'Both A and B'

    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers: {
            a: 'Ignores the statements',
            b: 'Gives a warning',
            c: 'Throws an error',
        },
        correctAnswer: 'Ignores the statements'

    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: {
            a: 'console.log()',
            b: 'window.alert()',
            c: 'All the Above'
        },
        correctAnswer: 'All the Above'

    }
];
var arrayQuestions 
let lastQuestionIndex = questions.length -1;
var maxQuestions = 4;
var timerId;

//start quiz button

startBtn.addEventListener("click", startGame);
quizContent.style.display = "none";

// setTime();
//generate quiz
function startGame() {
    console.log("clicked");
    arrayQuestions = questions.values[0];
    timerId = setInterval (setTime, 1000);
    questionCounter = 0;
    score = 0;
    // currentQuestion++ 
    displayQuestion(currentQuestion);
   
 }

//countdown timer
function setTime() {
    // Sets interval in variable
    secondsLeft--;
    timeEl.textContent =`Time: ${secondsLeft}`;
  
    if(secondsLeft <= 0) {
        // Stops execution of action at set interval
    clearInterval(timerId);
        // Calls function to create and append image
    sendMessage();
    }
 }

 function displayQuestion(currentIndex) {
    quiz.style.display = "none";
    quizContent.style.display = "block";
    question.textContent=questions[currentIndex].question;
    choiceA.textContent=questions[currentIndex].answers.a;
    choiceB.textContent=questions[currentIndex].answers.b;
    choiceC.textContent=questions[currentIndex].answers.c;
    choiceA.addEventListener("click", displayQuestion++);
 }

function displayScore() {

}

  function sendMessage() {
    timeEl.textContent ="Time's Up! Try Again!";   
  }
//display questions
// function showQuestions() 
     
// //show results

// function showResults()
	
	

//submit initals button
// submitButton.addEventListener('click', ShowResults);

//VHS button


// startGame();

