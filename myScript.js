let myArray = [
    "Rock",
    "Paper",
    "Scissors"
];

let randomChoice = myArray[Math.floor(Math.random()*myArray.length)];

playerSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
computerSelection = randomChoice;

function rockPaperScissors() {
    if ((playerSelection == 'rock') && (computerSelection == 'Scissors')) {
    return 'You win! Rock beats Scissors';
}   
    else if ((playerSelection == 'rock') && (computerSelection == 'Paper')) {
    return 'You lose! Paper beats Rock';
}   
    else if ((playerSelection == 'rock') && (computerSelection == 'Rock')) {
    return 'Rock vs Rock is a draw!';
    }
    else {
        return "You haven't entered a valid choice";
    }
}

console.log(playerSelection);
console.log(computerSelection);
console.log(rockPaperScissors(playerSelection, computerSelection));
