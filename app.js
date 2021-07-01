const buttons = document.querySelectorAll('button')
const resultDisplay = document.getElementById('result')
const playerScoreDisplay = document.getElementById('player-score')
const computerScoreDisplay = document.getElementById('computer-score')

let playerScore = 0
let computerScore = 0

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (playerScore === 5 || computerScore === 5) {
            alert("Game Over. Refresh page to restart")
        } else {
            const playerSelection = e.currentTarget.id
            const computerSelection = computerChoose()

            const result = playRound(playerSelection, computerSelection)
            resultDisplay.textContent = result

            scoreTracker(result)
        }
    })
})

function computerChoose() {
    const randomInt = Math.random()

    if (randomInt < 0.33) return "rock"
    else if (randomInt < 0.67) return "paper"
    else return "scissors"
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw"
    }

    if (playerSelection === "rock" && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win, ${playerSelection} beats ${computerSelection}`
    }

    if (computerSelection === "rock" && playerSelection === 'scissors' ||
        computerSelection === 'paper' && playerSelection === 'rock' ||
        computerSelection === 'scissors' && playerSelection === 'paper') {
        return `You lose, ${computerSelection} beats ${playerSelection}`
    }
}

function scoreTracker(result) {
    if (result.includes('You win')) {
        playerScore++
        playerScoreDisplay.textContent = `Player: ${playerScore}`
    } else if (result.includes('You lose')) {
        computerScore++
        computerScoreDisplay.textContent = `Computer: ${computerScore}`
    }

    if (playerScore === 5) {
        resultDisplay.textContent = "You've won the game!"
    } else if (computerScore === 5) {
        resultDisplay.textContent = "You've lost the game!"
    }
}