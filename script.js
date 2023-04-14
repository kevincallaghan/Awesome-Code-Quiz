// Global variables
let currentQuestion = 0;
let score = 0;
var progress = 0;
let remainingTime = 0;
let intervalId;

// Variables taken from HTML
const startButton = document.getElementById("start-button"); hideBottomButtonContainer = document.getElementById("hideBottomButtonContainer"); 
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const nameInput = document.getElementById("name-input");
const questionContainer = document.getElementById("question-container");
const timerContainer = document.getElementById("timer");
const progressContainer = document.getElementById("hideProgress");
const scoreFormContainer = document.getElementById("saveScoreForm");
const questionText = document.getElementById("question");
const timerElement = document.getElementById("time")
const answerButtonContainer = document.getElementById("answer-button-container");
const startingTime = 90;
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const nameScoreContainer = document.getElementById("name-score-container");
const playerNameDisplay = document.getElementById("player-name");
const playerScoreDisplay = document.getElementById("player-score");

// Question and answer variables
const questions = [
  {
    question: "Who played Iron Man in the Marvel Cinematic Universe?",
    answers: ["Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo", "Tom Holland"],
    correctAnswer: "Robert Downey Jr."
  },
  {
    question: "Who is the Norse God of Thunder?",
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
  hideBottomButtonContainer.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  timerContainer.classList.remove("hidden");
  progressContainer.classList.remove("hidden");
  scoreDisplay.classList.remove("hidden");  //Does this even do anything??
  remainingTime = startingTime;

  //! See Credits for Timer Inspiration
  function startTimer(seconds, cb) {
    remainingTime = seconds;
    intervalId = setInterval(function () {
      console.log(remainingTime + " seconds remaining!");
      timerContainer.innerText = remainingTime;
      remainingTime--;
      if (remainingTime < 0) {
        clearInterval(intervalId);
        cb();
      }
    }, 1000);
  }

  timerContainer.innerText = remainingTime;

  var callback = function () {
    console.log('Oops, you ran out of time!');
    endQuiz();
  };

  startTimer(startingTime, callback);
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

// Shows the question and answer choices from the questions array
questionText.innerText = questions[currentQuestion].question;
for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
  const answerButton = answerButtonContainer.children[i];
  answerButton.innerText = questions[currentQuestion].answers[i];
  answerButton.dataset.answer = questions[currentQuestion].answers[i];
  
  answerButton.addEventListener("click", selectAnswer);
}

//User selects their answer and either gets it correct  and earns points or !correct and will lose time
function selectAnswer() {
  const selectedButton = event.target;
  const selectedAnswer = selectedButton.dataset.answer;
  const correctAnswer = questions[currentQuestion].correctAnswer;
  if (selectedAnswer === correctAnswer) {
    score += 10;
    scoreDisplay.innerText = score + " Points";
  } else {
    remainingTime -= 5;
    timerDisplay.innerText = remainingTime;
  }
  
  currentQuestion++;
  updateProgressBar();
  if (currentQuestion === questions.length || remainingTime <= 0) {
    endQuiz();
  } else {
    nextQuestion();
  }
}

function nextQuestion() {
  questionText.innerText = questions[currentQuestion].question;
  for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
    const answerButton = answerButtonContainer.children[i];
    answerButton.innerText = questions[currentQuestion].answers[i];
    answerButton.dataset.answer = questions[currentQuestion].answers[i];

    answerButton.addEventListener("click", selectAnswer);
  }
}

function endQuiz() {
  clearInterval(intervalId);
  questionContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  scoreDisplay.classList.add("hidden");
  scoreFormContainer.classList.remove("hidden");
  nameScoreContainer.classList.remove("hidden");
  playerNameDisplay.classList.remove("hidden");
  playerScoreDisplay.classList.remove("hidden");
 }

// function endQuiz() {
//   clearInterval(intervalId);
//   questionContainer.classList.add("hidden");
//   timerContainer.classList.add("hidden");
//   progressContainer.classList.add("hidden");
//   scoreFormContainer.classList.remove("hidden");
//   scoreDisplay.classList.add("hidden");

//   // Save the name and score to local storage
//   submitButton.addEventListener("click", function () {
//     const playerName = nameInput.value;
//     const playerScore = score;
//     localStorage.setItem(playerName, playerScore);
//     playerNameDisplay.innerText = playerName;
//     playerScoreDisplay.innerText = playerScore;
//     nameInput.value = "";
//     scoreFormContainer.classList.add("hidden");
//   });
// }

function saveScore() {
  const name = document.getElementById('name-input').value;
  const score = document.getElementById('score').innerText;
  localStorage.setItem('quizScore', score);
  localStorage.setItem('quizName', name);
}

scoreFormContainer.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent form submission
  const name = document.getElementById('name-input').value;
  const quizScore = score;
  const scoreName = { name: name, score: quizScore };
  localStorage.setItem('quizScore', JSON.stringify(scoreName));

});

// check if there is already a score in local storage
const savedScore = localStorage.getItem('quizScore');
if (savedScore) {
  const scoreName = JSON.parse(savedScore);
  // display the score on the page
  const playerName = document.getElementById('player-name');
  const playerScore = document.getElementById('player-score');
  playerName.textContent = scoreName.name;
  playerScore.textContent = scoreName.score;
  playerNameDisplay.classList.remove("hidden");
  playerScoreDisplay.classList.remove("hidden");
}



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

//TODO FUNCTIONS I KNOW I WILL NEED FOR THIS TO WORK
// function nextQuestion() {
//     //Need to show the next question when I click an answer for the previous question
// }
// function endQuiz() {
//     //Need the quiz to end when the questions end, or when time runs out.  This should also call the saveScore function I still need to figure out.
//}
// function saveScore () {
//     //Need some way to save the score to local memory - name prompt and final score should be saved.
//}