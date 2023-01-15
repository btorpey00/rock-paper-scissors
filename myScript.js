let computerChoice;
let playerChoice;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let compChoice = Math.random();

    if (compChoice < 1/3) {
        computerChoice = "Rock";
    }

    else if (compChoice >= 1/3 && compChoice < 2/3) {
        computerChoice = "Paper";
    }

    else {
        computerChoice = "Scissors";
    }
}

function getPlayerChoice() {
    while (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissors") {
        playerChoice = prompt("Please enter \"Rock\", \"Paper\", or \"Scissors\": ");

        playerChoice = (playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase());

        if (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissors") {
            alert ("Please enter a valid selection!");
        }
    };
}

function compareChoices() {
    if (computerChoice === "Rock") {
        if (playerChoice === "Rock") {
            console.log("Tie!");
            //alert("Tie!");
        }
        else if (playerChoice === "Paper") {
            console.log("Paper covers Rock, you win!");
            //alert("Paper covers Rock, you win!");
            playerWins = ++playerWins;
        }
        else {
            console.log("Rock smashes Scissors, you lose!");
            //alert("Rock smashes Scissors, you lose!");
            computerWins = ++computerWins;
        }
    }

    else if (computerChoice === "Paper") {
        if (playerChoice === "Rock") {
            console.log("Paper covers Rock, you lose!");
            //alert("Paper covers Rock, you lose!");
            computerWins = ++computerWins;
        }
        else if (playerChoice === "Paper") {
            console.log("Tie");
            //alert("Tie");
        }
        else {
            console.log("Scissors cut Paper, you win!");
            //alert("Scissors cut Paper, you win!");
            playerWins = ++playerWins;
        }
    }

    else {
        if (playerChoice === "Rock") {
            console.log("Rock crushes Scissors, you win!");
            //alert("Rock crushes Scissors, you win!");
            playerWins = ++playerWins;
        }
        else if (playerChoice === "Paper") {
            console.log("Scissors cut Paper, you lose!");
            //alert("Scissors cut Paper, you lose!");
            computerWins = ++computerWins;
        }
        else {
            console.log("Tie!");
            //alert("Tie!");
        }
    }
}

function playRound() {
    getPlayerChoice();
    getComputerChoice();
    console.log(`You picked ${playerChoice}, the computer picked ${computerChoice}`);
    //alert(`You picked ${playerChoice}, the computer picked ${computerChoice}`);
    compareChoices();
    if (computerWins === 3) {
        console.log(`Final score is Player: ${playerWins}, Computer: ${computerWins}.  The Computer Wins!`);
        /*alert(`Final score is Player: ${playerWins}, Computer: ${computerWins}.
        The Computer Wins!`);*/
    }
    else if (playerWins === 3) {
        console.log(`Final score is Player: ${playerWins}, Computer: ${computerWins}.  You Win!`);
        /*alert(`Final score is Player: ${playerWins}, Computer: ${computerWins}.
        You Win!`);*/
    }
    else {
        console.log(`Current score is: Player: ${playerWins}, Computer: ${computerWins}.  Best of 5 wins!`)
        /*alert(`Current score is: Player: ${playerWins}, Computer: ${computerWins}.
        Best of 5 wins!`)*/
    }
    playerChoice = "";
    computerChoice ="";
}

while (computerWins < 3 && playerWins <3) {
    playRound();
}
