// Create a function getComputerChoice that randomly returns either 'Rock', 'Paper' or 'Scissors'.
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