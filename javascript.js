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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  selection.textContent =
    `Player selected ${playerSelection};
     Computer selected ${computerSelection}.`;

  if (playerSelection === computerSelection) {
    return "It's a tie!";

  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper covers rock.";
    } else if (computerSelection === "scissors") {
      playerScore++;
      return "You win! Rock breaks scissors.";
    }
  
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You win! Paper covers rock.";
    } else if (computerSelection === "scissors") {
      computerScore++;
      return "You lose! Scissors cut paper.";
    }

  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You lose! Rock breaks scissors.";
    } else if (computerSelection === "paper") {
      playerScore++;
      return "You win! Scissors cut paper.";
    }
  } else {
    return "Oops! Something went wrong. Try again.";
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
const selection = document.querySelector("#selection");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    winner.textContent = "";

    result.textContent = 
      playRound(button.id, getComputerChoice()) +
      ` The score is Player ${playerScore} : Computer ${computerScore}.`;

    if (playerScore >= 5 || computerScore >= 5) {
      winner.textContent = reportWinner(playerScore, computerScore);
      playerScore = 0;
      computerScore = 0;
    }
  })
});