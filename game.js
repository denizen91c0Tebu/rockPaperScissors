let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice == 1) {
        return "rock"
    }
    else if (compChoice == 2) {
        return "paper"
    }
    else if (compChoice == 3) {
        return "scissors"
    }
}