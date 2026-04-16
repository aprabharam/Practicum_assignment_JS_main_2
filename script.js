function computerPlay() {
    const playOptions = ['Scissors', 'Paper', 'Rock'];
    const randomOptionIndex = Math.floor(Math.random() * 3);
    return playOptions[randomOptionIndex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === null) {
        return "cancel|Enter a valid selection. Round cancelled";
    }

    var playerChoice = playerSelection.toUpperCase().trim();
    var computerChoice = computerSelection.toUpperCase().trim();

    if(!['ROCK', 'PAPER', 'SCISSORS'].includes(playerChoice)) {
        return "invalid|Invalid player entry. This counts as an invalid round. Please enter either Rock, Paper or Scissors"
    }

    if(playerChoice === computerChoice) {
        return `tie|It's a TIE. Both the Computer and player selected ${playerChoice}`;
    }

    if((playerChoice === "ROCK" && computerChoice === "SCISSORS") || 
        (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK")) 
        {
            return `win|Congrats! You won this round!! ${playerChoice} beats ${computerChoice}`;
        }
    else
        {
            return `lose|Oh no! The computer won this round. You Lose! ${computerChoice} beats ${playerChoice}`;
        }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    let invalidEntries = 0;

    alert("Welcome to the game of Rock, Paper and Scissors. You get to play 5 valid rounds. Remember a round is valid only if you enter a valid input, which is Rock, Paper or Scissors. If you try to break the system by entering an invalid input, you can keep entering it as long as your hands starts aching. Don't worry I have all day! But if you decide to enter the correct values, you get to play 5 valid rounds and you may (only if you win) take a prize back home. So, ARE YOU READY?????????");
    while(roundsPlayed < 5) {
        let computerSelection = computerPlay();
        
        let playerSelection = prompt(`Round ${roundsPlayed + 1} - Enter Rock, Paper or Scissors to play the game`);

        let result = playRound(playerSelection, computerSelection);
        let resultType = result.split("|")[0];
        let resultMessage = result.split("|")[1];

        switch(resultType) {
            case "invalid": {
                alert(invalidEntries > 6? "Seriously????? Just enter a valid entry":resultMessage);
                invalidEntries++;
                continue;
            }
            case "cancel": {
                alert(resultMessage);
                return;
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
                break;
            }
            default:
                alert("Oh oh. Something went wrong");
                invalidEntries++;
                continue;
        }

        alert(`You chose: ${playerSelection.toUpperCase()}
            Computer chose: ${computerSelection.toUpperCase()}
            ${resultMessage}
            
            Score:
            Player: ${playerScore}
            Computer: ${computerScore}`);

        roundsPlayed++;

        if(roundsPlayed < 5) {
            let nextRound = confirm("Do you want to play next round?");
            if(!nextRound) {
                let finalmessage;
                if(playerScore > computerScore) {
                    finalmessage = "You are winning! You escaped before the AI could beat you."
                } else if(playerScore < computerScore) {
                    finalmessage = "AI is winning. You gave up too soon!";
                } else {
                    finalmessage = "It's a tie so far";
                }
                alert(`Game ended early!
                    Your score: ${playerScore}
                    Computer's score: ${computerScore}
                    ${finalmessage}`);
                return;
            }
        }
    }

    if(playerScore > computerScore) {
        alert(`Your score: ${playerScore}
                Computer's score: ${computerScore}
                You just proved that humans can beat AI! Wohoooo. You are the winner of the game`);
    } else if(computerScore > playerScore) {
        alert(`Your score: ${playerScore}
                Computer's score: ${computerScore}
                This is going to be the end of the world! AI wins.`)
    } else {
        alert(`Your score: ${playerScore}
                Computer's score: ${computerScore}
                It's a tie. That was a good game!`)
    }
}

game();