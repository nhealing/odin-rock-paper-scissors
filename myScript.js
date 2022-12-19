let myArray = [
    "rock",
    "paper",
    "scissors"
];



let randomChoice = myArray[Math.floor(Math.random()*myArray.length)];

let playerSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
const computerSelection = randomChoice;

function rockPaperScissors(playerSelection, computerSelection) {
    if ((playerSelection == 'rock') && (computerSelection == 'scissors') || (playerSelection == 'paper') && (computerSelection == 'rock') || (playerSelection == 'scissors') && (computerSelection == 'paper')) {
    return 'You win!';
}   
    else if ((playerSelection == 'rock') && (computerSelection == 'paper') || (playerSelection == 'paper') && (computerSelection == 'scissors') || (playerSelection == 'scissors') && (computerSelection == 'rock')) {
    return 'You lose';
}   
    else if (playerSelection == computerSelection) {
        return 'Draw';
    }
    else {
        return "You haven't entered a valid choice";
    }
}

for (let i = 0; i < 5; i++) {
    
}

console.log(playerSelection);
console.log(computerSelection);
console.log(rockPaperScissors(playerSelection, computerSelection));