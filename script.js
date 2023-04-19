// Get all the question containers
const questions = document.querySelectorAll('.question-container');



// Add a click event listener to all the answer buttons
document.querySelectorAll('.answer-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Get the result associated with the clicked button
    const result = button.getAttribute('data-result');
    
    // Hide the current question container
    button.closest('.question-container').classList.add('hidden');
    
    // Show the next question container based on the result
    const nextQuestion = document.querySelector(`#question${result}`);
    nextQuestion.classList.remove('hidden');
  });
});

// Add a click event listener to the first answer button
document.querySelector('#question0 .answer-btn').addEventListener('click', () => {
  // Hide the second question container
  document.querySelector('#question00').classList.add('hidden');
});

document.querySelector('#question00 .answer-btn').addEventListener('click', () => {
  // Hide the second question container
  document.querySelector('#question0').classList.add('hidden');
});





function openLink(url) {
  window.open(url, "_blank");
}