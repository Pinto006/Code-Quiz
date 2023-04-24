const quiz = documnet.getElementbyID("#quiz");
const choices = Array.from(documnet.querySelectorAll("Questions"));
const results = document.getElementById('quizFinish');
const highScores = document.getElementById('highScore');
let lastQuestionIndex = questions.length -1;
var currentQuestion = 0;
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0
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

var maxQuestions = 4;
var points = 100;

//start quiz button

//generate quiz
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...question];
    getNextQuestions()
}

//countdown timer

//display questions
function showQuestions() 
     
//show results

function showResults()
	
	

//submit initals button
submitButton.addEventListener('click', ShowResults);

//VHS button


startGame();

