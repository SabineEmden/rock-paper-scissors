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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const selection = document.createElement("p");
  selection.textContent =
    `Player selected ${playerSelection};
     Computer selected ${computerSelection}.`;
  container.appendChild(selection);

  const result = document.createElement("p");

  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";

  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      result.textContent = "You lose! Paper covers rock.";
    } else if (computerSelection === "scissors") {
      playerScore++;
      result.textContent = "You win! Rock breaks scissors.";
    }
  
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      result.textContent = "You win! Paper covers rock.";
    } else if (computerSelection === "scissors") {
      computerScore++;
      result.textContent = "You lose! Scissors cut paper.";
    }

  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      result.textContent = "You lose! Rock breaks scissors.";
    } else if (computerSelection === "paper") {
      playerScore++;
      result.textContent = "You win! Scissors cut paper.";
    }
  } else {
    result.textContent = "Oops! Something went wrong. Try again.";
  }

  container.appendChild(result);
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

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("Choose Rock, Paper or Scissors:");
//     let computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//     console.log(`The score is player ${playerScore} : computer ${computerScore}`);
//   }
//   console.log(reportWinner(playerScore, computerScore));
//   playerScore = 0;
//   computerScore = 0;
// }

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(playRound(button.id, getComputerChoice()));
  })
});