let myArray = [
    "Rock",
    "Paper",
    "Scissors"
];

let randomChoice = myArray[Math.floor(Math.random()*myArray.length)];

playerSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
computerSelection = randomChoice;

function rockPaperScissors(playerSelection, computerSelection) {
    if ((playerSelection == 'rock') && (computerSelection == 'Scissors')) {
    return 'You win! Rock beats Scissors';
}   
    else if ((playerSelection == 'rock') && (computerSelection == 'Paper')) {
    return 'You lose! Paper beats Rock';
}   
    else if ((playerSelection == 'rock') && (computerSelection == 'Rock')) {
    return 'Rock vs Rock is a draw!';
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'Scissors')) {
        return 'You lose! Scissors beats paper';
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'Paper')) {
        return 'Paper vs Paper is a draw!'
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'Rock')) {
        return 'You win! Paper beats Rock'
    }
    else if ((playerSelection == 'scissors') && (computerSelection
        == 'Scissors')) {
        return 'Scissors vs scissors is a draw!'
        }
    else if ((playerSelection == 'scissors') && (computerSelection == 'Paper')) {
        return 'You win! Scissors beats Paper';
    }
    else if ((playerSelection == 'scissors') && (computerSelection == 'Rock')) {
        return 'You lose! Rock beats Paper'
    }
    else {
        return "You haven't entered a valid choice";
    }
}

console.log(playerSelection);
console.log(computerSelection);
console.log(rockPaperScissors(playerSelection, computerSelection));
