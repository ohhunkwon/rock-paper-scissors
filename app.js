function computerPlay() {
    const randomInt = Math.random()

    if (randomInt < 0.33) return "Rock"
    else if (randomInt < 0.67) return "Paper"
    else return "Scissor"
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    console.log('Player:', playerSelection, 'Computer:', computerSelection)

    if (playerSelection === computerSelection) {
        return "It's a Draw!"
    }

    if (playerSelection === "rock" && computerSelection === 'scissor' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissor' && computerSelection === 'paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }

    if (computerSelection === "rock" && playerSelection === 'scissor' ||
        computerSelection === 'paper' && playerSelection === 'rock' ||
        computerSelection === 'scissor' && playerSelection === 'paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    let playerWins = 0
    let computerWins = 0

    while (playerWins < 5 && computerWins < 5) {
        const playerSelection = prompt("Choose your weapon (Rock, Paper, Scissor)")
        const computerSelection = computerPlay()
        const winner = playRound(playerSelection, computerSelection)

        if (winner.includes('You Win')) {
            playerWins++
        } else if (winner.includes('You Lose')) {
            computerWins++
        }
        
        console.log('PlayerWins:', playerWins, 'ComputerWins:', computerWins)
    }

    if (playerWins === 5) console.log("Player wins the game!")
    else if (computerWins === 5) console.log("Computer wins the game!")
}

game()