let computerSelection = getComputerChoice();
let playerSelection;
let win = 0;
let lose = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}

//Plays a single round of RPS

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        win++;
        return "You win, " + playerSelection + " beats " + computerSelection  + "!";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection == "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        lose++;
        return "You lose, " + computerSelection + " beats " + playerSelection  + "!";
    } else if (playerSelection === computerSelection) {
        return "Stalemate, " + playerSelection + " vs " + computerSelection + " is a draw!";
    } else {
        return "Invalid choice";
    }
}

//Loop to play 5 rounds and output score

function game() {
    for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    computerChoice = getComputerChoice()

    console.log(playRound(playerSelection, computerChoice));
    console.log("Your score is ", win);
    console.log("Computers score is ", lose);

    } if (win > lose) {
        console.log("You win! Final score is " + win + " - " + lose + "!")
    } else if ( win < lose) {
        console.log("You lose! Final score is " + lose + " - " + win + "!")
    } else {
        console.log("Final score!   It's a " + win + " - " + lose + " draw!");
    }
}
 game();