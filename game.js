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

function playRound(playerSelection, computerSelection) {
    let playerChoice = prompt("Please type Rock, Paper, or Scissors");
    console.log(playerChoice)
    if (playerChoice == null) {
        return "You have canceled the program"
    }
    playerSelection = playerChoice.toLowerCase();
    if (playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper") {
        return "Sorry you must input one of those 3 options!"
    }
    computerSelection = getComputerChoice();
    console.log(computerSelection)
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore ++;
        return "You Lose! Paper beats rock"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++;
        return "You Win! Congratulations"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++;
        return "You Win! Congratulations"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++;
        return "You Lose! Scissors beats paper"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++;
        return "You Win! Congratulations"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++;
        return "You Lose! Rock beats scissors"
    }
}
