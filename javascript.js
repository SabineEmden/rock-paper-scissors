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

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose Rock, Paper or Scissors:");
    let computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
    alert(`The score is player ${playerScore} : computer ${computerScore}`);
  }
}

let playerScore = 0;
let computerScore = 0;