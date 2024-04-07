// Get all the questions
const questions = document.querySelectorAll('.question');
let currentQuestionIndex = 0; // Start with the first question

// Function to show the current question and hide the rest
function showQuestion() {
    // Hide all questions
    questions.forEach((question, index) => {
        if (index === currentQuestionIndex) {
            // Show the current question
            question.style.display = 'block';
        } else {
            // Hide other questions
            question.style.display = 'none';
        }
    });
}

// Initially show the first question
showQuestion();