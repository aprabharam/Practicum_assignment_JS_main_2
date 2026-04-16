function computerPlay() {
    const playOptions = ['Scissors', 'Paper', 'Rock'];
    const randomOptionIndex = Math.floor(Math.random() * 3);
    return playOptions[randomOptionIndex];
}

// console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    if(playerSelection === null) {
        return "Enter valid selection. Round cancelled";
    }

    var playerChoice = playerSelection.toUpperCase().trim();
    if(!['ROCK', 'PAPER', 'SCISSORS'].includes(playerChoice)) {
        return "Invalid player entry."
    }

    return `You Lose! FILL UP ${playerChoice}`
}

// const playerSelection = 'Rock';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let round = 0; round < 5; round++) {
        let computerSelection = computerPlay();
        console.log("Computer chose:", computerSelection);
        let playerSelection = prompt("Hello! Enter Rock, Paper or Scissors to play the game");
        let result = playRound(playerSelection, computerSelection);

        console.log(playRound(playerSelection, computerSelection));

        console.log("Winner of the round is - ")

    }
}

game();