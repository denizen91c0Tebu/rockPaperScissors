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
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        player.append("Tie");
        comp.append("Tie")
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore ++;
        comp.append(computerScore);
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++;
        player.append(playerScore);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++;
        player.append(playerScore);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++;
        comp.append(computerScore);
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++;
        player.append(playerScore);
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++;
        comp.append(computerScore);
    }
}
let rock = document.querySelector('.rock');
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");

rock.addEventListener('click', () => {
    if(playerScore == 5){
        player.textContent ="PLAYER YOU WIN!";
        comp.textContent ="YOU LOSE!";
    }
    else if(computerScore == 5){
        comp.textContent ="COMP YOU WIN!";
        player.textContent ="YOU LOSE!";
    }
    else{
    playRound(playerSelection = 'rock');}
});
scissors.addEventListener('click', () => {
    if(playerScore == 5){
        player.textContent ="PLAYER YOU WIN!";
        comp.textContent ="YOU LOSE!";
    }
    else if(computerScore == 5){
        comp.textContent ="COMP YOU WIN!";
        player.textContent ="YOU LOSE!";
    }
    else{
    playRound(playerSelection = 'scissors');}
});
paper.addEventListener('click', () => {
    if(playerScore == 5){
        player.textContent ="PLAYER YOU WIN!";
        comp.textContent ="YOU LOSE!";
        
    }
    else if(computerScore == 5){
        comp.textContent ="COMP YOU WIN!";
        player.textContent ="YOU LOSE!";
    }
    else{
    playRound(playerSelection = 'paper');}
});
let ol = document.querySelector('ol');
let comp = document.createElement('div');
let player = document.createElement('div');
player.textContent = "This is the playerScore = ";
comp.textContent = "This is the computerScore = ";
ol.appendChild(comp);
ol.appendChild(player);
    // function playGame() {
    //     for(i = 0; i <= 4; i++) {
    //         playRound();
    //     }
    //     if (playerScore > computerScore){
    //         return "You have won the tournament!"
    //     }
    //     else if (computerScore > playerScore){
    //         return "You have lost the tournament!"
    //     }
    //     else if (computerScore == playerScore) {
    //         return "It's a tie!"
    //     }
    // }

    // console.log(playGame())
