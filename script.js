
let choices = ['rock', 'paper', 'scissors'];

let userScore = 0
let computerScore = 0

let hasWinner = false

const userScoreText = document.querySelector("#user-score")
const computerScoreText = document.querySelector("#computer-score")

userScoreText.textContent = userScore
computerScoreText.textContent = computerScore

const choice = document.querySelectorAll(".choice")

let paperChoice = document.querySelector("#paper").addEventListener("click", () => {
    playRound(getComputerChoice(), 'paper')
})
let scissorsChoice = document.querySelector("#scissors").addEventListener("click", () => {
    playRound(getComputerChoice(), 'scissors')
})
let rockChoice = document.querySelector("#rock").addEventListener("click", () => {
    playRound(getComputerChoice(), 'rock')
})

let resultText = document.querySelector(".result-text")
resultText.textContent = "Computer has chosen! What is your move?"

const resetButton = document.createElement("button")
resetButton.classList.add("reset-button")
resetButton.textContent = "Next round"
resetButton.style.cssText = "background-color: dodgerblue; font-size: 20px; font-weight: bold; padding: 1em 1.5em; display: none; border-radius: 10px; color: white;"
document.querySelector(".result").append(resetButton)
resetButton.addEventListener("click", resetRound)

let computerChoiceImage = document.querySelector(".image.computer")
let userChoiceImage = document.querySelector(".image.user")

function resetRound(){
    if(hasWinner){
        userScore = 0
        computerScore = 0
        userScoreText.textContent = userScore
        computerScoreText.textContent = computerScore
        hasWinner = false
    }
    resultText.textContent = "Computer has chosen! What is your move?"
    computerChoiceImage.src = "assets/question-mark.jpeg"
    userChoiceImage.src = "assets/question-mark.jpeg"

    //hide reset button
    resetButton.style["display"] = "none"

    //show choices
    choice.forEach((choice) => {
        choice.style["display"] = "block"
    })
    
}

function addScore(result){
    if(result=='You win!'){
        userScore++
        userScoreText.textContent = userScore
    }
    else if(result=='You lose.'){
        computerScore++
        computerScoreText.textContent = computerScore
    }

    if(userScore===5 || computerScore===5){
        hasWinner = true
    }
}

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(computerChoice, userChoice){
    if(userChoice=='rock'){
        if(computerChoice==='paper'){
            resultText.textContent =  "You lose.";
        }
        else if(computerChoice==='rock'){
            resultText.textContent = "It's a tie!";
        }
        else{
            resultText.textContent = "You win!";
        }
    }
    else if(userChoice==='paper'){
        if(computerChoice==='rock'){
            resultText.textContent = "You win!";
        }
        else if(computerChoice==='scissors'){
            resultText.textContent = "You lose.";
        }
        else{
            resultText.textContent = "It's a tie!";
        }
    }
    else{
        if(computerChoice==='rock'){
            resultText.textContent = "You lose.";
        }
        else if(computerChoice==='scissors'){
            resultText.textContent = "It's a tie!";
        }
        else{
            resultText.textContent = "You win!";
        }
    }

    //this function adds the score and returns true if user/computer has 5 points
    addScore(resultText.textContent)
    
    //changes reset button text to restart game if there is a winner already
    if(hasWinner){
        resetButton.textContent = "Restart game"

        //displays the winner and score
        if(userScore>computerScore){
            resultText.textContent = `You win ${userScore} - ${computerScore}!`
        }
        else{
            resultText.textContent = `Computer wins ${computerScore} - ${userScore}!`
        }
    }

    //shows restart button
    resetButton.style["display"] = "block"

    //hide choices
    choice.forEach((choice) => {
        choice.style["display"] = "none"
    })

    //displays the player's choices
    computerChoiceImage.src = `assets/${computerChoice}.jpg`
    userChoiceImage.src = `assets/${userChoice}.jpg` 
}



