let myArray = [
    "Rock",
    "Paper",
    "Scissors"
];

let randomChoice = myArray[Math.floor(Math.random()*myArray.length)];

playerSelection = prompt("Do you choose Rock, Paper or Scissors?");
computerSelection = randomChoice;

console.log(computerSelection);

function rockPaperScissors(playerSelection, computerSelection) {

}