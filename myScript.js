let computerChoice;
let playerChoice;
let playerWins = 0;
let computerWins = 0;

const compScore = document.querySelector('#computer-score');
const playerScore = document.querySelector('#player-score');
const showPlayerChoice = document.querySelector('#player-pic');
const showCompChoice = document.querySelector('#computer-pic');
const result = document.querySelector('#result');


function startOver() {
    playerWins = 0;
    computerWins = 0;
    playerChoice = '';
    computerChoice = '';
    showPlayerChoice.textContent = `${playerChoice}`;
    showCompChoice.textContent = `${computerChoice}`;
    playerScore.textContent = `${playerWins}`;
    compScore.textContent = `${computerWins}`;
    result.textContent = '';
}

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice == 0) {
        computerChoice = "Rock";
    }

    else if (compChoice == 1) {
        computerChoice = "Paper";
    }

    else {
        computerChoice = "Scissors";
    }
}

function selectRock() {
    playerChoice = "Rock";
    playRound();
}

function selectPaper() {
    playerChoice = "Paper";
    playRound();
}

function selectScissors() {
    playerChoice = "Scissors";
    playRound();
}

function compareChoices() {
    if (computerChoice === "Rock") {
        if (playerChoice === "Rock") {
            result.textContent = 'Tie!';
        }
        else if (playerChoice === "Paper") {
            result.textContent = 'Paper covers Rock, you win!';
            playerWins = ++playerWins;
        }
        else {
            result.textContent = 'Rock smashes Scissors, you lose!';
            computerWins = ++computerWins;
        }
    }

    else if (computerChoice === "Paper") {
        if (playerChoice === "Rock") {
            result.textContent = 'Paper covers Rock, you lose!';
            computerWins = ++computerWins;
        }
        else if (playerChoice === "Paper") {
            result.textContent = 'Tie!';
        }
        else {
            result.textContent = 'Scissors cut Paper, you win!';
            playerWins = ++playerWins;
        }
    }

    else {
        if (playerChoice === "Rock") {
            result.textContent = 'Rock crushes Scissors, you win!';
            playerWins = ++playerWins;
        }
        else if (playerChoice === "Paper") {
            result.textContent = 'Scissors cut Paper, you lose!';
            computerWins = ++computerWins;
        }
        else {
            result.textContent = 'Tie!';
        }
    }
}

function playRound() {
    getComputerChoice();
    showPlayerChoice.textContent = `${playerChoice}`;
    showCompChoice.textContent = `${computerChoice}`;

    compareChoices();

    playerScore.textContent = `${playerWins}`;
    compScore.textContent = `${computerWins}`;

    if (playerWins === 3) {
        alert (`Game over, you win!\nFinal Score: Player: ${playerWins}, Computer: ${computerWins}`)
        startOver();
    }
    else if (computerWins === 3) {
        alert (`Game over, you lose!\nFinal Score: Player: ${playerWins}, Computer: ${computerWins}`)
        startOver();
    };
}

const clickRock = document.querySelector('#rock');
clickRock.addEventListener('click', () => {
    selectRock();    
});

const  clickPaper = document.querySelector('#paper');
clickPaper.addEventListener('click', () => {
    selectPaper();
});

const  clickScissors = document.querySelector('#scissors');
clickScissors.addEventListener('click', () => {
    selectScissors();
});


