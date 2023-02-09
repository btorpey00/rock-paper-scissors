let computerChoice;
let playerChoice;
let playerWins = 0;
let computerWins = 0;

const compScore = document.querySelector('#computer-score');
const playerScore = document.querySelector('#player-score');
const showPlayerChoice = document.querySelector('#player-pic');
const showCompChoice = document.querySelector('#computer-pic');
const result = document.querySelector('#result');
const playerBox = document.getElementById('player-box');
const computerBox = document.getElementById('computer-box')


function startOver() {
    playerWins = 0;
    computerWins = 0;
    playerChoice = '';
    computerChoice = '';
    showPlayerChoice.classList = ''
    showCompChoice.classList = ''
    playerScore.textContent = `${playerWins}`;
    compScore.textContent = `${computerWins}`;
    result.textContent = '';
    playerBox.classList = 'choice-pic';
    computerBox.classList = 'choice-pic';
}

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice == 0) {
        computerChoice = "Rock";
        showCompChoice.classList = "fa-regular fa-hand-back-fist";
    }

    else if (compChoice == 1) {
        computerChoice = "Paper";
        showCompChoice.classList = "fa-regular fa-hand";
    }

    else {
        computerChoice = "Scissors";
        showCompChoice.classList = "fa-regular fa-hand-scissors";
    }
}

function selectRock() {
    playerChoice = "Rock";
    showPlayerChoice.classList = "fa-regular fa-hand-back-fist";
    playRound();
}

function selectPaper() {
    playerChoice = "Paper";
    showPlayerChoice.classList = "fa-regular fa-hand";
    playRound();
}

function selectScissors() {
    playerChoice = "Scissors";
    showPlayerChoice.classList = "fa-regular fa-hand-scissors";
    playRound();
}

function compareChoices() {
    if (computerChoice === "Rock") {
        if (playerChoice === "Rock") {
            result.textContent = 'Tie!';
            playerBox.classList = 'choice-pic';
            computerBox.classList = 'choice-pic';
        }
        else if (playerChoice === "Paper") {
            result.textContent = 'Paper covers Rock, you win!';
            playerBox.classList = 'choice-pic win';
            computerBox.classList = 'choice-pic lose';
            playerWins = ++playerWins;
        }
        else {
            result.textContent = 'Rock smashes Scissors, you lose!';
            playerBox.classList = 'choice-pic lose';
            computerBox.classList = 'choice-pic win';

            computerWins = ++computerWins;
        }
    }

    else if (computerChoice === "Paper") {
        if (playerChoice === "Rock") {
            result.textContent = 'Paper covers Rock, you lose!';
            playerBox.classList = 'choice-pic lose';
            computerBox.classList = 'choice-pic win';
            computerWins = ++computerWins;
        }
        else if (playerChoice === "Paper") {
            result.textContent = 'Tie!';
            playerBox.classList = 'choice-pic';
            computerBox.classList = 'choice-pic';
        }
        else {
            result.textContent = 'Scissors cut Paper, you win!';
            playerBox.classList = 'choice-pic win';
            computerBox.classList = 'choice-pic lose';
            playerWins = ++playerWins;
        }
    }

    else {
        if (playerChoice === "Rock") {
            result.textContent = 'Rock crushes Scissors, you win!';
            playerBox.classList = 'choice-pic win';
            computerBox.classList = 'choice-pic lose';
            playerWins = ++playerWins;
        }
        else if (playerChoice === "Paper") {
            result.textContent = 'Scissors cut Paper, you lose!';
            playerBox.classList = 'choice-pic lose';
            computerBox.classList = 'choice-pic win';
            computerWins = ++computerWins;
        }
        else {
            result.textContent = 'Tie!';
            playerBox.classList = 'choice-pic';
            computerBox.classList = 'choice-pic';
        }
    }
}

function playRound() {        
        getComputerChoice();

        compareChoices();

        updateResult();

        if (playerWins == 3) {
            updateResult();
            setTimeout(function(){
                alert (`Game over, you win!\nFinal Score: Player: ${playerWins}, Computer: ${computerWins}`)
            }, 20);
            setTimeout(function() {this.addEventListener('click', startOver())}, 50); 
        }
        else if (computerWins == 3) {
            updateResult();
            setTimeout(function(){
                            alert (`Game over, you lose!\nFinal Score: Player: ${playerWins}, Computer: ${computerWins}`)
            }, 20);
            setTimeout(function() {this.addEventListener('click', startOver())}, 50);
        };
};

function updateResult (){
    // showPlayerChoice.textContent = `${playerChoice}`;
    // showCompChoice.textContent = `${computerChoice}`;
    playerScore.textContent = `${playerWins}`;
    compScore.textContent = `${computerWins}`;
};

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


