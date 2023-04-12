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
let timeLeft = 75;
let timerInterval;

// Variables taken from HTML
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const nameInput = document.getElementById("name-input");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElements = document.getElementById("answer-button-container");

//TODO Need to add additional variables for timer, progress, score, etc.

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


//Start the quiz
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  // Hide start button and show quiz/timer/progress
  startButton.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  timerContainer.classList.remove("hidden");
  progressDiv.classList.remove("hidden");
  
  timerDisplay();
}

// Shows the question and answer choices
questionElement.innerText = questions[currentQuestion].question;
for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
  const answerButton = answerButtonElements.children[i];
  answerButton.innerText = questions[currentQuestion].answers[i];
  answerButton.dataset.answer = questions[currentQuestion].answers[i];
  // answerButton.addEventListener("click", selectAnswer);

  //TODO Need to figure out how to score the answers correct or incorrect
}

//todo Timer - not currently working
// const timerDisplay = () => {
//   countdown = setInterval(() => {
//     count--;
//     timeLeft.innerHTML = `${count}s`;
//     if (count == 0) {
//       clearInterval(countdown);
//       displayNext();
//     }
//   }, 1000);
// };

// Need function for when an answer is entered - is it correct?  is it incorrect?  keep in mind the progress, score, timer.

// Need a function to end the quiz.  Keep in mind the score and name being stored.  Keep in mind the timer.

// Need a function to store score locally

