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
    
    return "You Lose! FILL UP"
}