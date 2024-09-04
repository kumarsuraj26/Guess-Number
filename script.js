// Event Handling
const input = document.getElementById('guessInput');
const button = document.getElementById('submitGuess');
const resultMessage = document.getElementById("resultMessage");

// Game Setup
let targetNumber = Math.floor(Math.random() * 100) + 1; // Expanded range from 1 to 100
let attempts = 0;

button.addEventListener('click', () => {
    const guess = parseInt(input.value, 10);

    // Input validation
    if (isNaN(guess)) {
        resultMessage.innerText = "Please enter a valid number.";
        return;
    }

    checkGuess(guess);
});

// Function to check guess
function checkGuess(guess) {
    attempts++;

    const difference = Math.abs(targetNumber - guess);

    if (guess === targetNumber) {
        resultMessage.innerText = `🎉 Congratulations! You've guessed it in ${attempts} attempt(s)!`;
        resetGame();
    } else if (difference <= 5) {
        resultMessage.innerText = `🔥 Very close! The number is ${guess > targetNumber ? 'lower' : 'higher'} than ${guess}.`;
    } else if (difference <= 10) {
        resultMessage.innerText = `😊 You are close! Try a ${guess > targetNumber ? 'lower' : 'higher'} number.`;
    } else if (difference <= 20) {
        resultMessage.innerText = `😐 You are a bit far. Consider guessing a ${guess > targetNumber ? 'lower' : 'higher'} number.`;
    } else {
        resultMessage.innerText = `😅 You are far away! The number is ${guess > targetNumber ? 'much lower' : 'much higher'}.`;
    }
}

// Function to reset the game
function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    attempts = 0; // Reset attempts
    input.value = ''; // Clear input field
}
