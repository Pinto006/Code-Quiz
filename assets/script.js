const quizEl = document.getElementById("quiz");
var quizContent = document.querySelector(".Questions");
var timeEl = document.querySelector("#game-clock");
var question = document.querySelector("#title");
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
        head: "Which of the following keywords is used to define a variable in Javascript?",
        options: ['var', 'let', 'Both A and B'],
        correctAnswer: 3
     },
        
    {
        head:  "Which of the following methods is used to access HTML elements using Javascript?",
        options: ['getElementbyId()','getElementsByClassName()', 'Both A and B'],
        correctAnswer: 3

    },
    {
        head: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        options: ['Ignores the statements', 'Gives a warning','Throws an error'],
        correctAnswer: 1
        },
        
    {
        head: "Which of the following methods can be used to display data in some form using Javascript?",
        options: ['console.log()', 'window.alert()','All the Above'],
        correctAnswer: 3
        },
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
    // displayQuestion(currentQuestion);
    quizEl.remove();
    quizContent.style.display = "block";
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
//attempt one to display the questions.//
 function displayQuestion(currentIndex) {
    quizEl.style.display = "none";
    quizContent.style.display = "block";
    
    question.textContent=questions[currentIndex].head;
    choiceA.textContent=questions[currentIndex].options[0];
    choiceB.textContent=questions[currentIndex].options[1];
    choiceC.textContent=questions[currentIndex].options[2];
    // choiceB.textContent=questions[currentIndex].answers.b;
    // choiceC.textContent=questions[currentIndex].answers.c;
        choiceA.addEventListener("click", function(){
        console.log("clicked A")
    //    displayQuestion(i)
    });}

 //attempt two to display questions.//
// function displayQuestion(questions) {
//     let titleDiv = document.getElementById('title');
//     for(let i =0; i < questions.length; i++) {
//     titleDiv.textContent = questions[i].head};
//     let opts = document.querySelectorAll('.options'); 
//     opts.forEach(function(element, index){
//         element.textContent = questions.options[index];

//         element.addEventListener('click', function(){
//             //checking answer
//             if(questions.correctAnswer === index) { 
//             }
//             else {

//             }
//         })
//     });
// }
// displayQuestion(question);

// function displayScore() {

// }

  function sendMessage() {
    timeEl.textContent ="Time's Up! Try Again!";   
  }

// function showQuestions() 
     
// //show results

// function showResults()
	
	

//submit initals button
// submitButton.addEventListener('click', ShowResults);

//VHS button




