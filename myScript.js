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

//define scores
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//Loop to play 5 rounds and output score

function game() { 
    for (let i =0; i <5; i++) {
        let playerSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();

        console.log("You choose " + playerSelection);
        console.log("The computer chose " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore>computerScore) {
        return "You win this game!"
    }
    else if (playerScore == computerScore) {
        return "This game is a draw!"
    }
    else {
        return "You lose this game!"
    }
}

console.log(game());
console.log("Your final score is " + playerScore + " wins, " + computerScore + " losses and " + drawScore + " draws");

let score = playerScore + computerScore + drawScore;

console.log("You played this game " + score + " times.");

console.log(getComputerChoice)