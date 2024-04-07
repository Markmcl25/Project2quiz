document.addEventListener('DOMContentLoaded', function() {
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
            // Handle quiz completion (e.g., show score)
            alert('Quiz completed!'); // Replace this with your desired action
        }
    }

    // Add event listener to the submit button
    submitButton.addEventListener('click', () => {
        showNextQuestion();
    });
});
