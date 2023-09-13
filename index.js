const prompt = require("prompt-sync")({ sigint: true });
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function getPlayerChoice() {
    let answer = "answer";

    while (!choices.includes(answer)) {
      answer = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
    }

    let newAnswer = capitalize(answer);

    return newAnswer;
}

function capitalize(str) {
    let first = str.charAt(0);
    first = first.toUpperCase();
    const letters = str.slice(1);
    let newStr = first + letters;

    return newStr;
}

function playRound() {
  const player = getPlayerChoice();
  const computer = capitalize(getComputerChoice());

  let winner;
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ) {
    console.log(`You win! ${player} beats ${computer}!`);
    winner = 1;
  } else if (
    (computer === "Rock" && player === "Scissors") ||
    (computer === "Scissors" && player === "Paper") ||
    (computer === "Paper" && player === "Rock")
  ) {
    console.log(`You lose! ${computer} beats ${player}`);
    winner = -1;
  } else {
    console.log(`It's a tie! ${player} ties with ${computer}`);
    winner = 0;
  }

  return winner;
}

function game() {
  let player = 0;
  let computer = 0;
  let tie = 0;
  let results = '';

  for (let i = 0; i < 5; i++) {
    let winner = playRound();
    if (winner === 1) player++;
    else if (winner === -1) computer++;
    else tie++;
  }

  if (player > computer) results += 'You won the series! ';
  else if (computer > player) results += 'You lost the series! ';
  else results += 'The series was a tie! ';

  results += `Final score - You: ${player}  Computer: ${computer}  Ties: ${tie}`;

  return results;
}

console.log(game());
