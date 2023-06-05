// Select the username element
const username = document.querySelector('#username');



// Select the final score element
const finalScore = document.querySelector('#finalScore');

// Get the most recent score from local storage
const mostRecentScore = localStorage.getItem('mostRecentScore');


// Display the most recent score
finalScore.innerText = mostRecentScore;




//chatgpt
  // Redirect to the quizzes page
  goHomeButton.onclick = function() {
    window.location.assign('quizzes.html');
  };
