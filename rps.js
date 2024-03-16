const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors' 


function getComputerChoice() {
    let num = Math.random();
    if (num <= 0.33) {
        return ROCK;
    } else if (num <= 0.66) {
        return PAPER;
    }   
    return SCISSORS;
}

function gameResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0
    }
    if (playerSelection === ROCK && computerSelection === SCISSORS ||
        playerSelection === SCISSORS && computerSelection === PAPER ||
        playerSelection === PAPER && computerSelection === ROCK) {
        return 1
    }
    return -1
}


function craftResult(playerChoice, computerSelection, result) {
    switch (result) {
        case 0:
            return `It is a tie. Both players chose ${playerChoice}.`
        case -1:
            return `Computer wins. ${computerSelection} beats ${playerChoice}.`
        default:
            return `Player wins. ${playerChoice} beats ${computerSelection}.`
    }
}

function craftFinalResult(playerScore, computerScore) {
    let finalScoreString = `Final Score, Player ${playerScore}, Computer ${computerScore}. `;
    let result = 'It is a tie!';
    if (playerScore > computerScore) {
        result = 'Player wins!';
    } else if (playerScore < computerScore) {
        result = 'Computer wins!';
    }
    return finalScoreString + result;
}


function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    console.log("Let's play some rounds of Rock, Paper, Scissors. Best of 5!");
    while (round < 5) {
        let playerSelection = prompt('What do you choose?');
        playerChoice = playerSelection.trim();
        playerChoice = playerChoice.toLowerCase(); 
        if (playerChoice !== ROCK && playerChoice !== PAPER && playerChoice !== SCISSORS) {
            console.log('You failed failed to select a valid choice. Please enter either \'rock\', \'paper\', or \'scissors\'');
            continue;
        }    

        let computerSelection = getComputerChoice();
        let result = gameResult(playerChoice, computerSelection);
        console.log(craftResult(playerChoice, computerSelection, result));

        switch (result) {
            case -1:
                computerScore++;
                break;
            case 1:
                playerScore++;
                break;
            default:
                computerScore++;
                playerScore++;
        }
        let scoreString = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        console.log(scoreString);
        round++;
    }
    console.log(craftFinalResult(playerScore, computerScore));
}

playGame()