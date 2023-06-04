// Select the username element
const username = document.querySelector('#username');

// Select the save score button element
const saveScoreBtn = document.querySelector('#saveScoreBtn');

// Select the final score element
const finalScore = document.querySelector('#finalScore');

// Get the most recent score from local storage
const mostRecentScore = localStorage.getItem('mostRecentScore');

// Retrieve high scores from local storage or initialize an empty array
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Set the maximum number of high scores
var MAX_HIGH_SCORES = 2200;

// Display the most recent score
finalScore.innerText = mostRecentScore;

// Disable save score button until username is entered
username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
});

// Function to save the high score
saveHighScore = (e) => {
  e.preventDefault();

  // Create a new score object with the most recent score and username
  const score = {
    score: mostRecentScore,
    name: username.value
  };

  // Add the new score to the high scores array
  highScores.push(score);

  // Sort the high scores array in descending order based on score
  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  // Keep only the top 5 high scores
  highScores.splice(5);

  // Store the updated high scores array in local storage
  localStorage.setItem('highScores', JSON.stringify(highScores));

  // Redirect to the quizzes page
  window.location.assign('quizzes.html');
}