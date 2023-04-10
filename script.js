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

//question and answer variables
const questions = [
  {
    question: "Who played the role of Iron Man in the Marvel Cinematic Universe?",
    answers: ["Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo", "Tom Holland"],
    correctAnswer: "Robert Downey Jr."
  },
  {
    question: "What is the name of the Norse God of Thunder",
    answers: ["Loki", "Odin", "Thor", "Star-Lord"],
    correctAnswer: "Thor"
  },
  {
    question: "Who destroyed half of all life in the universe with one snap?",
    answers: ["Thanos", "Magneto", "Loki", "Vulture"],
    correctAnswer: "Thanos"
  },
  {
    question: "Who is Spider-Man's aunt?",
    answers: ["Mary Jane (MJ)", "Gwen Stacy", "Natasha Romanoff", "May Parker"],
    correctAnswer: "May Parker"
  },
  {
    question: "What is the name of the organization led by Nick Fury that assembles the Avengers?",
    answers: ["H.A.M.M.E.R.", "S.H.I.E.L.D.", "F.O.R.C.E", "P.O.W.E.R."],
    correctAnswer: "S.H.I.E.L.D."
  },
]

// quiz variables for the start of the game

// Variables for my html elements to interact with

//Start the quiz