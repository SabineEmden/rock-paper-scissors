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

  if (playerSelection === computerSelection) {
    return "It's a tie! Try again.";

  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper cover rock.";
    } else if (computerSelection === "scissors") {
      return "You win! Rock breaks scissors.";
    }
  
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
    return "You win! Paper covers rock.";
    } else if (computerSelection === "scissors") {
    return "You lose! Scissors cut paper.";
    }

  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock breaks scissors.";
    } else if (computerSelection === "paper") {
      return "You win! Scissors cut paper.";
    }
  } else {
    return "Oops! Something went wrong. Try again.";
  }
}

const playerSelection = "kittens";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));