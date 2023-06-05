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

// play music while the quiz commences
const audio = document.getElementById("myAudio");
const playlist = ["Mozart-Sonatak333.mp3", "Beethoven-Pathétique.mp3", "Beethoven-Symphony7.mp3"];
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

playNextTrack();




// Initialize variables for the current question, answer acceptance, score, question counter, and available questions
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0; 
let questionCounter = 0;
let availableQuestions = [];

// questions and their answers based on the html format
let questions = [
        {
        question: "Which composer is known for his famous 'Symphony No. 40 in G minor'?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 2
        },
        {
        question: "In which key is Beethoven's 'Symphony No. 5'?",
        choice1: "C minor",
        choice2: "D minor",
        choice3: "E minor",
        choice4: "G minor",
        answer: 1
        },
        {
        question: "Who composed 'Symphony No. 9 in D minor, Op. 125'?",
        choice1: "Wolfgang Amadeus Mozart",
        choice2: "Franz Joseph Haydn",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Schubert",
        answer: 3
        },
        {
        question: "Which composer is known for his famous 'Eine kleine Nachtmusik'?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 2
        },
        {
        question: "In which key is Mozart's 'Piano Sonata No. 16 in C major'?",
        choice1: "C major",
        choice2: "D major",
        choice3: "E major",
        choice4: "G major",
        answer: 1
        },
        {
        question: "Who composed 'Symphony No. 94' (Surprise Symphony)?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 4
        },
        {
        question: "In which key is Haydn's 'Trumpet Concerto in E-flat major'?",
        choice1: "E-flat major",
        choice2: "D major",
        choice3: "A-flat major",
        choice4: "C major",
        answer: 1
        },
        {
        question: "Which composer is known for his famous 'The Marriage of Figaro'?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 2
        },
        {
        question: "Who composed 'Symphony No. 7 in A major'?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 3
        },
        {
        question: "In which key is Beethoven's 'Moonlight Sonata'?",
        choice1: "C minor",
        choice2: "D minor",
        choice3: "E minor",
        choice4: "G minor",
        answer: 3
        },
        {
        question: "Who composed 'The Magic Flute'?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 2
        },
        {
        question: "In which key is Mozart's 'Clarinet Concerto in A major'?",
        choice1: "A major",
        choice2: "B major",
        choice3: "C major",
        choice4: "D major",
        answer: 1
        },
        {
        question: "Who composed 'Symphony No. 101' (The Clock Symphony)?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 4
        },
        {
        question: "In which key is Haydn's 'Cello Concerto No. 2 in D major'?",
        choice1: "D major",
        choice2: "E major",
        choice3: "G major",
        choice4: "C major",
        answer: 1
        },
        {
        question: "Which composer is known for his famous 'Symphony No. 94' (Surprise Symphony)?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 4
        },
        {
        question: "Who composed 'Symphony No. 3 in E-flat major' (Eroica Symphony)?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 3
        },
        {
        question: "In which key is Mozart's 'Symphony No. 41' (Jupiter Symphony)?",
        choice1: "C major",
        choice2: "D major",
        choice3: "E major",
        choice4: "G major",
        answer: 2
        },
        {
        question: "Who composed 'Symphony No. 45' (Farewell Symphony)?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 4
        },
        {
        question: "In which key is Beethoven's 'Symphony No. 6' (Pastoral Symphony)?",
        choice1: "C major",
        choice2: "D major",
        choice3: "E major",
        choice4: "G major",
        answer: 1
        },
        {
        question: "Who composed 'Symphony No. 94' (Surprise Symphony)?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 4
        },
        {
        question: "In which key is Mozart's 'Piano Concerto No. 21'?",
        choice1: "C major",
        choice2: "D major",
        choice3: "E major",
        choice4: "G major",
        answer: 3
        },
        {
        question: "Who composed 'Symphony No. 100' (Military Symphony)?",
        choice1: "Johann Sebastian Bach",
        choice2: "Wolfgang Amadeus Mozart",
        choice3: "Ludwig van Beethoven",
        choice4: "Franz Joseph Haydn",
        answer: 4
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
    return window.location.assign('classicalend.html');
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
