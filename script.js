let secretNumber;
let maxNumber = 100;
let attempts = 0;
let lastDifference = null;

const message = document.getElementById("message");
const smartTip = document.getElementById("smartTip");
const attemptsDisplay = document.getElementById("attempts");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

function setDifficulty() {
  const difficulty = document.getElementById("difficulty").value;

  if (difficulty === "easy") maxNumber = 50;
  else if (difficulty === "medium") maxNumber = 100;
  else maxNumber = 200;

  restartGame();
}

function randomNumber() {
  return Math.floor(Math.random() * maxNumber) + 1;
}

function restartGame() {
  secretNumber = randomNumber();
  attempts = 0;
  lastDifference = null;
  message.textContent = "";
  smartTip.textContent = "";
  attemptsDisplay.textContent = "0";
  document.getElementById("guess").value = "";
}

function checkGuess() {
  const guessInput = document.getElementById("guess");
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > maxNumber) {
    message.textContent = `⚠️ Enter a number between 1 and ${maxNumber}.`;
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  const difference = Math.abs(secretNumber - guess);

  if (guess === secretNumber) {
    message.textContent = `🎉 You got it! The number was ${secretNumber}.`;
    smartTip.textContent = `Excellent! Found in ${attempts} tries.`;
    correctSound.play();
  } else {
    wrongSound.play();

    if (guess < secretNumber) {
      message.textContent = "📈 Too low!";
    } else {
      message.textContent = "📉 Too high!";
    }

    // Smart hint logic
    if (lastDifference !== null) {
      if (difference < lastDifference) {
        smartTip.textContent = "🔥 You’re getting closer!";
      } else {
        smartTip.textContent = "❄️ You’re moving away!";
      }
    } else {
      smartTip.textContent = "💡 Try adjusting by tens to narrow it down!";
    }

    lastDifference = difference;
  }

  guessInput.value = "";
  guessInput.focus();
}

// Initialize game
restartGame();
