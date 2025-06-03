//Rock Paper Scissors - The Odin Project
//Built with sweat by @NoPainNoGain-SigmaDev

//getComputerChoice generates a random number
//From 0 to 2 inclusive, and returns either R, P or S
const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  return number === 0 ? "rock" : number === 1 ? "paper" : "scissors";
};

//getHumanChoice returns the user input
const getHumanChoice = () => {
  return prompt("Your turn!\nRock, Paper or Scissors:");
};

//Rock > Scissors
//Scissors > Paper
//Paper > Rock

//Plays the game 5 times and announces a winner
const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  //playRound compares the computer with the human
  //if the computer did not win then the human won

  const playRound = (humanChoice, computerChoice) => {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if (human === computer) {
      console.log("DRAW! No winner");
      return;
    }

    if (
      (computer === "rock" && human === "scissors") ||
      (computer === "paper" && human === "rock") ||
      (computer === "scissors" && human === "paper")
    ) {
      console.log(
        "COMPUTER Wins! " +
          computerChoice.toUpperCase() +
          " beats " +
          humanChoice.toUpperCase()
      );
      computerScore++;
    } else {
      console.log(
        "You Win! " +
          humanChoice.toUpperCase() +
          " beats " +
          computerChoice.toUpperCase()
      );
      humanScore++;
    }
  };

  for (let i = 0; i < 5; i++) {
    let human = getHumanChoice();
    let computer = getComputerChoice();

    playRound(human, computer);
  }

  if (humanScore > computerScore) {
    console.log("COMPUTER WAS DEFEATED, YOU WIN!");
  } else {
    console.log("YOU WERE DEFEATED, COMPUTER WINS!");
  }
};

//Game begins here
playGame();
