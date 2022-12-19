let myArray = [
    "rock",
    "paper",
    "scissors"
];

let getComputerChoice = myArray[Math.floor(Math.random()*myArray.length)];

let playerSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
let computerSelection = getComputerChoice;

//Plays a single round of RPS

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock') && (computerSelection == 'scissors') || (playerSelection == 'paper') && (computerSelection == 'rock') || (playerSelection == 'scissors') && (computerSelection == 'paper')) {
    playerScore++
    return win;
}   
    else if ((playerSelection == 'rock') && (computerSelection == 'paper') || (playerSelection == 'paper') && (computerSelection == 'scissors') || (playerSelection == 'scissors') && (computerSelection == 'rock')) {
        computerScore++
         return lose;
}   
    else if (playerSelection == computerSelection) {
        drawScore++
        return draw;
    }
    else {
        return "You haven't entered a valid choice";
    }
}

//define win, lose or draw
 const win = "You win this round!";
 const lose = "You lose this round!";
 const draw = "It's a draw";

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