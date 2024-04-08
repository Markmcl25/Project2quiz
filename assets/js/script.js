document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('.submit');
    const questions = document.querySelectorAll('.question');
    let currentQuestionIndex = 0;

    // Function to show the next question
    function showNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            questions[currentQuestionIndex].style.display = 'none';
            currentQuestionIndex++;
            questions[currentQuestionIndex].style.display = 'block';
            submitButton.disabled = true; // Disable submit button for the next question
        } else {
            alert('Quiz completed!'); // Tracker
        }
    }

    // Function to enable submit button when a radio button is selected
    function enableSubmitButton() {
        submitButton.disabled = false;
    }

    // Add event listener to the submit button
    submitButton.addEventListener('click', () => {
        showNextQuestion();
    });

    // Add event listeners to radio buttons to enable submit button when an option is selected
    const answerButtons = document.querySelectorAll('.options input[type="radio"]');
    answerButtons.forEach(button => {
        button.addEventListener('change', () => {
            enableSubmitButton();
        });
    });

    // Username input handling
    const startButton = document.getElementById('startQuiz');
    const usernameInput = document.getElementById('username');
    const gameArea = document.querySelector('.game-area');

    startButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username) {
            document.querySelector('.username-input').style.display = 'none';
            gameArea.style.display = 'block';
        } else {
            alert('Please enter a username.');
        }
    });
});
