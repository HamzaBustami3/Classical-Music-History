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
const playlist = ["Chopin-Ballade4.mp3", "Liszt-BendictionDeDieuDansLaSolitude.mp3", "Liszt-Liebestraum.mp3", "Brahms-intermezzo.mp3","Schubert-Impromptu3.mp3"];
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
          question: "How many ballades did Chopin write?",
          choice1: "Four",
          choice2: "Two",
          choice3: "Six",
          choice4: "Eight",
          answer: 1,
        },
        {
          question: "In which year was Chopin born?",
          choice1: "1801",
          choice2: "1805",
          choice3: "1810",
          choice4: "1814",
          answer: 2,
        },
        {
          question: "Which composer is known for his character pieces called 'Carnaval'?",
          choice1: "Robert Schumann",
          choice2: "Franz Liszt",
          choice3: "Johannes Brahms",
          choice4: "Frédéric Chopin",
          answer: 1,
        },
        {
          question: "How many symphonies did Brahms compose?",
          choice1: "Three",
          choice2: "Four",
          choice3: "Five",
          choice4: "Nine",
          answer: 4,
        },
        {
          question: "Which composer was known for his virtuosic piano transcriptions?",
          choice1: "Franz Liszt",
          choice2: "Robert Schumann",
          choice3: "Frédéric Chopin",
          choice4: "Johannes Brahms",
          answer: 1,
        },
        {
          question: "What is the nickname given to Liszt's Hungarian Rhapsody No. 2?",
          choice1: "Rhapsody in Blue",
          choice2: "Hungarian Dances",
          choice3: "Liebestraum",
          choice4: "The Devil's Trill",
          answer: 2,
        },
        {
          question: "Which composer is known for his famous piano composition 'Clair de Lune'?",
          choice1: "Claude Debussy",
          choice2: "Franz Liszt",
          choice3: "Frédéric Chopin",
          choice4: "Robert Schumann",
          answer: 1,
        },
        {
          question: "How many piano concertos did Brahms write?",
          choice1: "One",
          choice2: "Two",
          choice3: "Three",
          choice4: "Four",
          answer: 2,
        },
        {
          question: "Which composer suffered from mental health issues and spent time in a mental institution?",
          choice1: "Robert Schumann",
          choice2: "Frédéric Chopin",
          choice3: "Franz Liszt",
          choice4: "Johannes Brahms",
          answer: 1,
        },
        {
          question: "What is the title of Chopin's famous funeral march?",
          choice1: "Moonlight Sonata",
          choice2: "Funeral March",
          choice3: "Pathétique Sonata",
          choice4: "Für Elise",
          answer: 2,
        },
        {
          question: "Which composer was known as the 'Poet of the Piano'?",
          choice1: "Franz Liszt",
          choice2: "Robert Schumann",
          choice3: "Frédéric Chopin",
          choice4: "Johannes Brahms",
          answer: 3,
        },
        {
          question: "In which city did Liszt hold his famous piano recitals?",
          choice1: "Vienna",
          choice2: "Paris",
          choice3: "Berlin",
          choice4: "Budapest",
          answer: 4,
        },
        {
          question: "How many symphonies did Brahms write?",
          choice1: "Three",
          choice2: "Four",
          choice3: "Five",
          choice4: "Nine",
          answer: 4,
        },
        {
          question: "Which composer's music is characterized by its lyricism and expressiveness?",
          choice1: "Johannes Brahms",
          choice2: "Frédéric Chopin",
          choice3: "Franz Liszt",
          choice4: "Robert Schumann",
          answer: 1,
        },
        {
          question: "What is the title of Brahms' most famous lullaby?",
          choice1: "Nocturne in E-flat Major",
          choice2: "Symphony No. 5",
          choice3: "Piano Concerto No. 1",
          choice4: "Wiegenlied",
          answer: 4,
        },
        {
          question: "Which composer is known for his virtuosic piano technique and showmanship?",
          choice1: "Franz Liszt",
          choice2: "Robert Schumann",
          choice3: "Frédéric Chopin",
          choice4: "Johannes Brahms",
          answer: 1,
        },
        {
          question: "How many piano concertos did Chopin write?",
          choice1: "One",
          choice2: "Two",
          choice3: "Three",
          choice4: "Four",
          answer: 1,
        },
        {
          question: "Which composer was known for his unconventional harmonic language and complex compositions?",
          choice1: "Robert Schumann",
          choice2: "Johannes Brahms",
          choice3: "Frédéric Chopin",
          choice4: "Franz Liszt",
          answer: 2,
        },
        {
          question: "What is the title of Schumann's famous piano piece inspired by a poet's love for a distant beloved?",
          choice1: "Liebestraum",
          choice2: "Moonlight Sonata",
          choice3: "Traumerei",
          choice4: "Fantaisie-Impromptu",
          answer: 3,
        },
        {
          question: "Which composer is associated with the 'Lisztomania' phenomenon, where his performances created a frenzy among audiences?",
          choice1: "Johannes Brahms",
          choice2: "Frédéric Chopin",
          choice3: "Robert Schumann",
          choice4: "Franz Liszt",
          answer: 4,
        },
        {
          question: "How many symphonies did Schumann compose?",
          choice1: "One",
          choice2: "Two",
          choice3: "Three",
          choice4: "Four",
          answer: 3,
        },
        {
          question: "Who was known as 'The Romantic Titan' among the composers of the era?",
          choice1: "Frédéric Chopin",
          choice2: "Robert Schumann",
          choice3: "Johannes Brahms",
          choice4: "Franz Liszt",
          answer: 4,
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
    return window.location.assign('romanticend.html');
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
