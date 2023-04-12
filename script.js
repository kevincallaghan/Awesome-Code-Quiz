// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
//TODO add variables and questions/answers
//TODO start button with onclick to start quiz
   //todo need variable for 
//todo timer that counts down once started
//todo question appears with answer choices
//todo once answered, another question appears
//todo timer subtracted if answer is wrong
//todo quiz ends when all questions are answered of timer gets to zero
//todo then game over shows up
//todo then you can enter and save score

// Global variables
let currentQuestion = 0;
let score = 0;
var progress = 0;
let remainingTime = 75;

// Variables taken from HTML
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const nameInput = document.getElementById("name-input");
const questionContainer = document.getElementById("question-container");
const timerContainer = document.getElementById("timer");
const progressContainer = document.getElementById("myProgress");
const questionElement = document.getElementById("question");
const timerElement = document.getElementById("time")
const answerButtonElements = document.getElementById("answer-button-container");
const startingTime = 120;
const scoreDisplay = document.getElementById("score");


// Question and answer variables
const questions = [
  {
    question: "Who played Iron Man in the Marvel Cinematic Universe?",
    answers: ["Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo", "Tom Holland"],
    correctAnswer: "Robert Downey Jr."
  },
  {
    question: "What is the name of the God of Thunder",
    answers: ["Loki", "Odin", "Thor", "Star-Lord"],
    correctAnswer: "Thor"
  },
  {
    question: "Who destroyed half of all life in the universe?",
    answers: ["Thanos", "Magneto", "Loki", "Vulture"],
    correctAnswer: "Thanos"
  },
  {
    question: "Who is Spider-Man's aunt?",
    answers: ["Mary Jane (MJ)", "Gwen Stacy", "Natasha Romanoff", "May Parker"],
    correctAnswer: "May Parker"
  },
  {
    question: "What is the name of the organization led by Nick Fury?",
    answers: ["H.A.M.M.E.R.", "S.H.I.E.L.D.", "F.O.R.C.E", "P.O.W.E.R."],
    correctAnswer: "S.H.I.E.L.D."
  },
]

//Starts the quiz and the timer at the same time.
//TODO Still something wrong with timer - won't show on screen - FIX LATER!!!!  Need to update Credits tomorrow!!!

startButton.addEventListener("click", startQuizWithTimer);

function startQuizWithTimer() {
  startButton.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  timerContainer.classList.remove("hidden");
  progressContainer.classList.remove("hidden");
  scoreDisplay.classList.remove("hidden");
  score = 0;
  remainingTime = startingTime;

  //! See Credits for Timer Inspiration
  
  function startTimer(seconds, cb) {
    timerContainer.innerText = remainingTime;
    var remainingTime = seconds;
    var intervalId = setInterval(function () {
      console.log(remainingTime);
      remainingTime--;
      if (remainingTime < 0) {
        clearInterval(intervalId);
        cb();
      }
    }, 1000);
  }

  var callback = function () {
    console.log('Oops, you ran out of time!');
    endQuiz();
  };

  startTimer(90, callback);
}

// Shows the question and answer choices from the questions array
questionElement.innerText = questions[currentQuestion].question;
for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
  const answerButton = answerButtonElements.children[i];
  answerButton.innerText = questions[currentQuestion].answers[i];
  answerButton.dataset.answer = questions[currentQuestion].answers[i];
  
  answerButton.addEventListener("click", selectAnswer);

  //TODO Need to figure out how to remove time from timer after I get the timer working correctly
}

//User selects their answer and either gets it correct  and earns points or !correct and will lose time
function selectAnswer() {
  const selectedButton = event.target;
  const selectedAnswer = selectedButton.dataset.answer;
  const correctAnswer = questions[currentQuestion].correctAnswer;
  if (selectedAnswer === correctAnswer) {
    score += 10;
    scoreDisplay.innerText = score;
  }
  //Need to add else that will remove time from timer
  currentQuestion++;
  updateProgressBar();
  if (currentQuestion === questions.length || remainingTime <= 0) {
    endQuiz();
  } else {
    nextQuestion();
  }
}


//! See Credits for Progress Bar Inspiration

function updateProgressBar() {
  if (progress < 100) {
    var elem = document.getElementById("myBar");
    progress += 20;
    elem.style.width = progress + "%";
    elem.innerHTML = progress + "%";
  }
}

//TODO FUNCTIONS I KNOW I WILL NEED FOR THIS TO WORK
function nextQuestion() {
    //Need to show the next question when I click an answer for the previous question
}

function endQuiz() { 
    //Need the quiz to end when the questions end, or when time runs out.  This should also call the saveScore function I still need to figure out.
}

function saveScore () {
    //Need some way to save the score to local memory - name prompt and final score should be saved.
}