'use strict';
const bodyElement = document.querySelector('body');
const againButtonElement = document.querySelector('.again');
const numberDisplayElement = document.querySelector('.number');
const guessInputElement = document.querySelector('.guess');
const checkButtonElement = document.querySelector('.check');
const messageElement = document.querySelector('.message');
const scoreSpanElement = document.querySelector('.score');
const highScoreSpanElement = document.querySelector('.highscore');

let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

againButtonElement.addEventListener('click', resetGame);
checkButtonElement.addEventListener('click', checkNumber);

function checkNumber() {
  const guess = Number(guessInputElement.value);
  if (!guess) {
    messageDisplay("⛔ No number");
  } else if (guess > 20 || guess < 1) {
    messageDisplay("⛔ Entered number not in valid range(1-20)");
  } else if (guess === secretNumber) {
    messageDisplay("🎉 Correct Number!");
    bodyElement.style.backgroundColor = '#60b347';
    numberDisplayElement.style.width = '30rem';
    numberDisplayElement.textContent = secretNumber;
    if (score >= highScore) {
      highScore = score;
      highScoreSpanElement.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageDisplay(guess > secretNumber ? "⬆️ Too High!" : "⬇️ Too Low!");
      score--;
      scoreSpanElement.textContent = score;
    } else {
      messageDisplay("💥 You lost the Game.");
      scoreSpanElement.textContent = '0';
    }
  }
}

function resetGame() {
  score = 20;
  secretNumber = randomNumber();
  messageDisplay("Start guessing...");
  numberDisplayElement.textContent = "?";
  numberDisplayElement.style.width = "15rem";
  scoreSpanElement.textContent = score;
  bodyElement.style.backgroundColor = "#222";
  guessInputElement.value = "";
}

function randomNumber() {
  return Math.trunc((Math.random() * 20) + 1);
}

function messageDisplay(text) {
  messageElement.textContent = text;
}
