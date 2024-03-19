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
            return `Computer wins! ${computerSelection} beats ${playerChoice}.`
        default:
            return `Player wins! ${playerChoice} beats ${computerSelection}.`
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


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.btn');

function updateScoreString(result) {
    switch (result) {
        case -1:
            computerScore++;
            break;
        case 1:
            playerScore++;
            break;
        default:
    }
    return `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
}


// Iterate through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Play Game
        let computerSelection = getComputerChoice();
        let playerChoice = e.target.innerText.toLowerCase();
        let result = gameResult(playerChoice, computerSelection);
        // Update Result String
        let resultTxt = craftResult(playerChoice, computerSelection, result);
        let resultElem = document.querySelector('#result');
        resultElem.innerText = resultTxt;
        // Update Score String
        let scoreString = updateScoreString(result);
        let scoreElem = document.querySelector('#score');
        scoreElem.innerText = scoreString;
        // When game is over, display the final message and reset the game. 
        if (playerScore >= 5 || computerScore >= 5) {
            let finalResultStr = craftFinalResult(playerScore, computerScore);
            let finalElem = document.querySelector('#final');
            finalElem.innerText = finalResultStr;
            playerScore = 0;
            computerScore = 0;
            scoreElem.innerText = 'Your Score: 0 Computer Score: 0';
            resultElem.innerText = '';
        }
    });
});





