const choices = ["rock", "paper", "scissors"];
const choiceButtons = document.querySelectorAll(".choice-button");

const resultsDisplay = document.querySelector(".results-display");

const playerScoreSpan = document.getElementById("player-score");
let scorePlayer = parseInt(playerScoreSpan.innerHTML);
const computerScoreSpan = document.getElementById("computer-score");
let scoreComputer = parseInt(computerScoreSpan.innerHTML);
const tieScoreSpan = document.getElementById("tie-score");
let scoreTie = parseInt(tieScoreSpan.innerHTML);

const resetButton = document.getElementById("reset-button");

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function capitalize(str) {
  let first = str.charAt(0);
  first = first.toUpperCase();
  const letters = str.slice(1);
  let newStr = first + letters;

  return newStr;
}

function playRound(player) {
  const computer = capitalize(getComputerChoice());
  player = capitalize(player);

  let winner;
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ) {
    resultsDisplay.innerHTML = `You win! ${player} beats ${computer}!`;
    winner = 1;
    playerScoreSpan.innerHTML = scorePlayer += 1;
    checkForWin();
  } else if (
    (computer === "Rock" && player === "Scissors") ||
    (computer === "Scissors" && player === "Paper") ||
    (computer === "Paper" && player === "Rock")
  ) {
    resultsDisplay.innerHTML = `You lose! ${computer} beats ${player}`;
    winner = -1;
    computerScoreSpan.innerHTML = scoreComputer += 1;
    checkForWin();
  } else {
    resultsDisplay.innerHTML = `It's a tie! ${player} ties with ${computer}`;
    tieScoreSpan.innerHTML = scoreTie += 1;
  }

  return winner;
}

function startGame(e) {
  const player = e.target.getAttribute("data-choice");
  playRound(player);
}

function addListeners() {
  choiceButtons.forEach((button) => {
    button.addEventListener("click", startGame);
  });
  resetButton.addEventListener("click", resetGame);
}

function checkForWin() {
  if (scorePlayer === 5) {
    endGame("You won the series!");
  } else if (scoreComputer === 5) {
    endGame("You lost the series!");
  }
}

function endGame(message) {
  choiceButtons.forEach((button) => {
    button.removeEventListener("click", startGame);
  });

  alert(message);
}

function resetGame() {
  scorePlayer = 0;
  scoreComputer = 0;
  scoreTie = 0;
  playerScoreSpan.innerHTML = scorePlayer;
  computerScoreSpan.innerHTML = scoreComputer;
  tieScoreSpan.innerHTML = scoreTie;
  resultsDisplay.innerHTML = "";

  addListeners();
}

resetGame();
