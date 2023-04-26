const quiz = document.getElementById("quiz");
var timeEL = document.querySelector(".game-clock");
var startBtn = document.getElementById("start-btn");
const choices = Array.from(document.querySelectorAll("Questions"));
const results = document.getElementById('quizFinish');
const highScores = document.getElementById('highScore');
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
        correctAnswer: 'c'

    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: {
            a: 'getElementbyId()',
            b: 'getElementsByClassName()',
            c: 'Both A and B'
        },
        correctAnswer: 'c'

    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers: {
            a: 'Ignores the statements',
            b: 'Gives a warning',
            c: 'Throws an error',
        },
        correctAnswer: 'a'

    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: {
            a: 'console.log()',
            b: 'window.alert()',
            c: 'All the Above'
        },
        correctAnswer: 'c'

    }
];
var arrayQuestions 
let lastQuestionIndex = questions.length -1;
var maxQuestions = 4;
var points = 100;

//start quiz button

startBtn.addEventListener("click", startGame);

setTime();
//generate quiz
function startGame() {
    console.log("clicked");
    arrayQuestions = questions.values[0];
    setTime();
    questionCounter = 0;
    score = 0;
 }

//countdown timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
    //   timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = "Time's Up! Try Again!";   
  }
//display questions
// function showQuestions() 
     
// //show results

// function showResults()
	
	

//submit initals button
// submitButton.addEventListener('click', ShowResults);

//VHS button


startGame();

