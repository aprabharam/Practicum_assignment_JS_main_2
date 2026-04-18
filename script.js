function computerPlay() {
    const playOptions = ['SCISSORS', 'PAPER', 'ROCK'];
    const randomOptionIndex = Math.floor(Math.random() * 3);
    return playOptions[randomOptionIndex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === null) {
        return "cancel|You pressed cancel";
    }

    let playerChoice = playerSelection.toUpperCase().trim();

    if(!['ROCK', 'PAPER', 'SCISSORS'].includes(playerChoice)) {
        return "invalid|Invalid player entry. This counts as an invalid round. Please enter either Rock, Paper or Scissors"
    }

    if(playerChoice === computerSelection) {
        return `tie|It's a TIE. Both the Computer and player selected ${playerChoice}`;
    }

    if((playerChoice === "ROCK" && computerSelection === "SCISSORS") || 
        (playerChoice === "SCISSORS" && computerSelection === "PAPER") ||
        (playerChoice === "PAPER" && computerSelection === "ROCK")) 
        {
            return `win|Congrats! You won this round!! ${playerChoice} beats ${computerSelection}`;
        }
    else
        {
            return `lose|Oh no! The computer won this round. You Lose! ${computerSelection} beats ${playerChoice}`;
        }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    let invalidEntries = 0;
    let tiesScore = 0;

    alert("Welcome to the game of Rock, Paper and Scissors. \nYou get to play 5 valid rounds. Remember, a round is valid only if you enter a valid input, which is Rock, Paper or Scissors. \nIf you try to break the system by entering an invalid input, you can keep entering it as long as your hands starts aching. Don't worry I have all day! But if you decide to enter the correct values, you get to play 5 valid rounds and you may (only if you win) take a prize back home. \n\nSo, ARE YOU READY?????????");
    while(roundsPlayed < 5) {
        let computerSelection = computerPlay();
        
        let playerSelection = prompt(`Round ${roundsPlayed + 1} \nScoreboard: You - ${playerScore}   |   AI - ${computerScore}   |   Tie - ${tiesScore} \n\nEnter Rock, Paper or Scissors to play the game.`);

        let result = playRound(playerSelection, computerSelection);

        let resultType = result.split("|")[0];
        let resultMessage = result.split("|")[1];

        switch(resultType) {
            case "invalid": {
                alert(invalidEntries > 2? "Seriously????? Just enter a valid entry":resultMessage);
                invalidEntries++;
                continue;
            }
            case "cancel": {
                let confirmExit = confirm("You pressed cancel. \nAre you sure you want to exit the game?");

                if (confirmExit) {
                    alert("Game exited. The AI claims victory");
                    return null; 
                } else {
                    continue;
                }
            }
            case "win": {
                playerScore++;
                break;
            }
            case "lose": {
                computerScore++;
                break;
            }
            case "tie": {
                tiesScore++;
                break;
            }
            default:
                alert("Oh oh. Something went wrong");
                invalidEntries++;
                continue;
        }
        alert(`You chose: ${playerSelection.toUpperCase()} \nComputer chose: ${computerSelection} \n${resultMessage} \n\nScore: \nPlayer: ${playerScore} \nComputer: ${computerScore} \nTies: ${tiesScore}`);
        roundsPlayed++;
    }
    return {playerScore, computerScore, tiesScore};
}

function game() {
    let {playerScore, computerScore, tieScore} = playGame();

    if(playerScore > computerScore) {
        alert(`Your score: ${playerScore} \nComputer's score: ${computerScore} \nTies: ${tiesScore} \n\nYou just proved that humans can beat AI! Wohoooo. You are the WINNER of the game. \nGame ended.`);
    } else if(computerScore > playerScore) {
        alert(`Your score: ${playerScore} \nComputer's score: ${computerScore} \nTies: ${tiesScore} \n\nThis is going to be the end of the world! AI wins. YOU LOSE. \nGame ended.`)
    } else {
        alert(`Your score: ${playerScore} \nComputer's score: ${computerScore} \nTies: ${tiesScore} \n\nIt's a TIE. Seems like humans and AI have the same brains. That was a good game! \nGame ended.`)
    }
}

game();