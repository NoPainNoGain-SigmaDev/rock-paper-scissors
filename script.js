//Rock Paper Scissors - The Odin Project
//Built with sweat by @NoPainNoGain-SigmaDev

//DOM elements
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const roundCountDisplay = document.getElementById("round-count");
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result");
const winnerDisplay = document.getElementById("winner");

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  return number === 0 ? "rock" : number === 1 ? "paper" : "scissors";
};

//Global Variables
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const updateScore = () => {
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  roundCountDisplay.textContent = roundCount + 1;
};

const displayResult = (msg) => {
  resultDisplay.textContent = msg;
};
const displayWinner = (msg) => {
  winnerDisplay.textContent = msg;
};

const clear = () => {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
  updateScore();
  displayResult("");
  displayWinner("");
};

const playRound = (humanChoice) => {
  const computerChoice = getComputerChoice();
  roundCount++;

  if (humanChoice === computerChoice) {
    displayResult("DRAW! No winner");
    return;
  }

  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    displayResult(
      "COMPUTER Wins! " +
        computerChoice.toUpperCase() +
        " beats " +
        humanChoice.toUpperCase()
    );
    computerScore++;
  } else {
    displayResult(
      "You Win! " +
        humanChoice.toUpperCase() +
        " beats " +
        computerChoice.toUpperCase()
    );
    humanScore++;
  }

  return;
};

const playGame = (humanChoice) => {
  playRound(humanChoice);
  updateScore();

  if (humanScore === 5) {
    displayWinner("COMPUTER WAS DEFEATED, YOU WIN!");
    setTimeout(clear, 5000);
  } else if (computerScore === 5) {
    displayWinner("YOU WERE DEFEATED, COMPUTER WINS!");
    setTimeout(clear, 5000);
  }
};

rockBtn.addEventListener("click", () => {
  playGame("rock");
});

paperBtn.addEventListener("click", () => {
  playGame("paper");
});
scissorsBtn.addEventListener("click", () => {
  playGame("scissors");
});
