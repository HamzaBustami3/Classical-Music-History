
//brian design quiz app outline 
// Select the question element
const question = document.querySelector('#question');

// Select all choice elements and convert them into an array
const choices = Array.from(document.querySelectorAll('.choice-text'));

// Select the progress text element
const progressText = document.querySelector('#progressText');

// Select the score text element
const scoreText = document.querySelector('#score');

// Select the progress bar element
const progressBarFull = document.querySelector('#progressBarFull');

const audio = document.getElementById("myAudio");
const playlist = ["Bach-Goldberg.mp3", "ScarlarriSonataE.mp3", "Bach-CelloSuikte.mp3"];
let currentTrackIndex = 0;

audio.addEventListener("ended", playNextTrack);

function playNextTrack() {
  currentTrackIndex++;
  if (currentTrackIndex >= playlist.length) {
    currentTrackIndex = 0; // Loop back to the first track
  }
  audio.src = playlist[currentTrackIndex];
  audio.play();
}



// Initialize variables for the current question, answer acceptance, score, question counter, and available questions
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0; 
let questionCounter = 0;
let availableQuestions = [];

// questions and their answers based on the html format
let questions = [
    {
        question: "Which composer is known for his famous 'Goldberg Variations'?",
        choice1: "Johann Sebastian Bach",
        choice2: "Domenico Scarlatti",
        choice3: "George Frideric Handel",
        choice4: "Arcangelo Corelli",
        answer: 1,
        },
        
        {
        question: "In which city was Domenico Scarlatti born?",
        choice1: "Naples, Italy",
        choice2: "Rome, Italy",
        choice3: "Venice, Italy",
        choice4: "Florence, Italy",
        answer: 1,
        },
        
        {
        question: "Who composed the famous 'St. Matthew Passion'?",
        choice1: "Johann Sebastian Bach",
        choice2: "Domenico Scarlatti",
        choice3: "George Frideric Handel",
        choice4: "Arcangelo Corelli",
        answer: 1,
        },
        
        {
        question: "What is the musical form of a typical Scarlatti sonata?",
        choice1: "Binary form",
        choice2: "Ternary form",
        choice3: "Sonata form",
        choice4: "Rondo form",
        answer: 1,
        },
        
        {
        question: "In which year was Johann Sebastian Bach born?",
        choice1: "1685",
        choice2: "1695",
        choice3: "1705",
        choice4: "1715",
        answer: 1,
        },
        
        {
        question: "Who was the teacher of Johann Sebastian Bach?",
        choice1: "Dieterich Buxtehude",
        choice2: "George Frideric Handel",
        choice3: "Heinrich Schütz",
        choice4: "Johann Pachelbel",
        answer: 1,
        },
        
        {
        question: "Which composer is known for his famous 'Keyboard Concertos'?",
        choice1: "Johann Sebastian Bach",
        choice2: "Domenico Scarlatti",
        choice3: "George Frideric Handel",
        choice4: "Arcangelo Corelli",
        answer: 1,
        },
        
        {
        question: "Domenico Scarlatti is particularly renowned for his compositions for which instrument?",
        choice1: "Harpsichord",
        choice2: "Organ",
        choice3: "Violin",
        choice4: "Cello",
        answer: 1,
        },
        
        {
        question: "Who composed the famous 'Toccata and Fugue in D minor'?",
        choice1: "Johann Sebastian Bach",
        choice2: "Domenico Scarlatti",
        choice3: "George Frideric Handel",
        choice4: "Arcangelo Corelli",
        answer: 1,
        },
        
        {
        question: "In which year did Domenico Scarlatti compose his first keyboard sonata?",
        choice1: "1700",
        choice2: "1710",
        choice3: "1720",
        choice4: "1730",
        answer: 3,
        },
        
        {
        question: "Which composer is known for his famous 'Italian Concerto'?",
        choice1: "Johann Sebastian Bach",
        choice2: "Domenico Scarlatti",
        choice3: "George Frideric Handel",
        choice4: "Arcangelo Corelli",
        answer: 1,
        },
        
        {
        question: "In which city did Domenico Scarlatti spend a significant portion of his career?",
        choice1: "Madrid, Spain",
        choice2: "Paris, France",
        choice3: "Vienna, Austria",
        choice4: "London, England",
        answer: 1,
        },
        
        {
        question: "Who is considered the master of the fugue?",
        choice1: "Johann Sebastian Bach",
        choice2: "Domenico Scarlatti",
        choice3: "George Frideric Handel",
        choice4: "Arcangelo Corelli",
        answer: 1,
        },
        
        {
        question: "In which year did Johann Sebastian Bach pass away?",
        choice1: "1750",
        choice2: "1717",
        choice3: "1757",
        choice4: "1737",
        answer: 1,
        },
        {
            question: "In which country was Johann Sebastian Bach born?",
            choice1: "Germany",
            choice2: "Italy",
            choice3: "France",
            choice4: "Austria",
            answer: 1,
            },
            
            {
            question: "Who composed the famous 'Brandenburg Concertos'?",
            choice1: "Johann Sebastian Bach",
            choice2: "Domenico Scarlatti",
            choice3: "George Frideric Handel",
            choice4: "Arcangelo Corelli",
            answer: 1,
            },
            
            {
            question: "What instrument did Johann Sebastian Bach primarily play?",
            choice1: "Organ",
            choice2: "Violin",
            choice3: "Harpsichord",
            choice4: "Flute",
            answer: 3,
            },
            
            {
            question: "Which composer was known for his numerous keyboard sonatas, including the 'Sonatas in D major'?",
            choice1: "Johann Sebastian Bach",
            choice2: "Domenico Scarlatti",
            choice3: "George Frideric Handel",
            choice4: "Arcangelo Corelli",
            answer: 2,
            },
            
            {
            question: "In which city did Johann Sebastian Bach serve as the Cantor of St. Thomas Church?",
            choice1: "Leipzig, Germany",
            choice2: "Berlin, Germany",
            choice3: "Vienna, Austria",
            choice4: "Salzburg, Austria",
            answer: 1,
            },
            
            {
            question: "Who was the father of Johann Sebastian Bach?",
            choice1: "Johann Christoph Bach",
            choice2: "Heinrich Bach",
            choice3: "Wilhelm Friedemann Bach",
            choice4: "Carl Philipp Emanuel Bach",
            answer: 1,
            },
            
            {
            question: "Which composer is known for his famous 'Fandango' sonata?",
            choice1: "Johann Sebastian Bach",
            choice2: "Domenico Scarlatti",
            choice3: "George Frideric Handel",
            choice4: "Arcangelo Corelli",
            answer: 2,
            },
            
            {
            question: "In which year did Domenico Scarlatti pass away?",
            choice1: "1750",
            choice2: "1717",
            choice3: "1757",
            choice4: "1737",
            answer: 3,
            },
]

// Define constants for score points and maximum number of questions
var SCORE_POINTS = 100;
var MAX_QUESTIONS = 22;

// Function to start the game
startGame = () => {
  // Reset question counter, score, and available questions
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  
  // Get a new question
  getNewQuestion();
}

// Function to get a new question
getNewQuestion = () => {
  // Check if no more questions or reached maximum question limit
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    // Save the score to local storage
    localStorage.setItem('mostRecentScore', score);
    
    // Redirect to the end page
    return window.location.assign('baroqueend.html');
  }

  // Increment question counter and update progress text and bar
  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // Select a random question from available questions
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];

  // Update question and choices text
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  // Remove the used question from available questions
  availableQuestions.splice(questionsIndex, 1);

  // Allow answers to be accepted
  acceptingAnswers = true;
}

// Add event listeners to choices
choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    // Check if currently accepting answers
    if (!acceptingAnswers) return;

    // Stop accepting answers and get selected choice and answer
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    // Determine class to apply based on correctness
    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    // Increment score if answer is correct
    if (classToApply === 'correct') {
      incrementScore(SCORE_POINTS);
    }

    // Add class for visual feedback
    selectedChoice.parentElement.classList.add(classToApply);

    // Delay and then remove class and get new question
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

// Function to increment the score
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
}

// Start the game
startGame();
