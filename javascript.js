function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const container = document.querySelector("#container");
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const selection = document.querySelector(".selection");
  selection.textContent =
    `Player selected ${playerSelection};
     Computer selected ${computerSelection}.`;

  const result = document.querySelector(".result");

  if (playerSelection === computerSelection) {
    result.textContent = `It's a tie!\n
    The score is Player ${playerScore} : Computer ${computerScore}`;

  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      result.textContent = `You lose! Paper covers rock.\n
      The score is Player ${playerScore} : Computer ${computerScore}`;
    } else if (computerSelection === "scissors") {
      playerScore++;
      result.textContent = `You win! Rock breaks scissors.\n
      The score is Player ${playerScore} : Computer ${computerScore}`;
    }
  
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      result.textContent = `You win! Paper covers rock.\n
      The score is Player ${playerScore} : Computer ${computerScore}`;
    } else if (computerSelection === "scissors") {
      computerScore++;
      result.textContent = `You lose! Scissors cut paper.\n
      The score is Player ${playerScore} : Computer ${computerScore}`;
    }

  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      result.textContent = `You lose! Rock breaks scissors.\n
      The score is Player ${playerScore} : Computer ${computerScore}`;
    } else if (computerSelection === "paper") {
      playerScore++;
      result.textContent = `You win! Scissors cut paper.\n
      The score is Player ${playerScore} : Computer ${computerScore}`;
    }
  } else {
    result.textContent = "Oops! Something went wrong. Try again.";
  }

  if (playerScore >= 5 || computerScore >= 5) {
    const winner = document.querySelector("#winner");
    winner.textContent = reportWinner(playerScore, computerScore);
    playerScore = 0;
    computerScore = 0;
  }
}

function reportWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "You won the game. Congratulations!";
  } else if (playerScore < computerScore) {
    return "You lost the game.";
  } else {
    return "The game ended in a  tie.";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    winner.textContent = "";
    playRound(button.id, getComputerChoice());
  })
});