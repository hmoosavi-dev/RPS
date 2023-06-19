let userScore = 0;
let computerScore = 0;
let ties = 0;

let userChoice;
let computerChoice;

function getUserChoice() {
  userChoice = prompt("Enter Choice:");
}
function getComputerChoice() {
  x = Math.floor(Math.random() * 3 + 1);
  switch (x) {
    case 1:
      computerChoice = "r";
      break;
    case 2:
      computerChoice = "p";
      break;
    case 3:
      computerChoice = "s";
      break;
  }
}

function compare() {
  switch (userChoice) {
    case "r":
      switch (computerChoice) {
        case "r":
          ties++;
          break;
        case "p":
          computerScore++;
          break;
        case "s":
          userScore++;
          break;
      }
      break;
    case "p":
      switch (computerChoice) {
        case "r":
          userScore++;
          break;
        case "p":
          ties++;
          break;
        case "s":
          computerScore++;
          break;
      }
      break;
    case "s":
      switch (computerChoice) {
        case "r":
          computerScore++;
          break;
        case "p":
          userScore++;
          break;
        case "s":
          ties++;
          break;
      }
      break;
  }
}

function gameRound() {
  getUserChoice();
  getComputerChoice();
  compare();
}

for (let i = 0; i < 100; i++) {
  if (computerScore < 5 && userScore < 5) {
    console.log(`====================round${i + 1}====================`);
    gameRound();
    console.log(`userscore:${userScore}`);
    console.log(`computerscore:${computerScore}`);
    console.log(`ties:${ties}`);
  }
}
if (userScore > computerScore) {
  console.log("you win!");
} else {
  console.log("you lose!");
}
