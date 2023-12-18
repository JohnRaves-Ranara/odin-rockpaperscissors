
let choices = ['rock', 'paper', 'scissors'];

let userScore = 0
let computerScore = 0

const userScoreText = document.querySelector("#user-score")
const computerScoreText = document.querySelector("#computer-score")

userScoreText.textContent = userScore
computerScoreText.textContent = computerScore

let paperChoice = document.querySelector("#paper").addEventListener("click", () => {
    playRound(getComputerChoice(), 'paper')
})

let scissorsChoice = document.querySelector("#scissors").addEventListener("click", () => {
    playRound(getComputerChoice(), 'scissors')
})

let resultText = document.querySelector(".result-text")

let rockChoice = document.querySelector("#rock").addEventListener("click", () => {
    playRound(getComputerChoice(), 'rock')
})

resultText.textContent = "Computer has chosen! What is your move?"

const resetRoundButton = ""

let computerChoiceImage = document.querySelector(".image.computer")
let userChoiceImage = document.querySelector(".image.user")

function resetRound(resetScores){
    if(resetScores){
        userScore = 0
        computerScore = 0
        userScoreText.textContent = userScore
        computerScoreText.textContent = computerScore
    }
    resultText.textContent = "Computer has chosen! What is your move?"
    computerChoiceImage.src = "assets/question-mark.jpeg"
    userChoiceImage.src = "assets/question-mark.jpeg"
    
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

    // if(userScore===5 || computerScore===5){
    //     return true
    // }
    // return false
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
    let checkWinner = addScore(resultText.textContent)
    
    //this resets the scores 
    // if(checkWinner){
    //     resetRound(true)
    // }

    computerChoiceImage.src = `assets/${computerChoice}.jpg`
    userChoiceImage.src = `assets/${userChoice}.jpg` 

    // resetRound(false)
}

function restartConfirmation(){
    let restartChoice = confirm('Restart the game?');

    if(restartChoice===true){
        console.clear();
        game();
    }
}


function game(){
    let computerScore = 0;
    let userScore = 0;
    for(let round=1; round<=5; round++){
        let computerChoice = getComputerChoice();
        let userChoice = prompt(`Round ${round}/5\nComputer has chosen!\nWhat is your move? Rock, paper, or scissors?`).toLowerCase();

        //plays one round, returns the result 'You win', 'You lose', or 'Its a tie.'
        let play = playRound(computerChoice, userChoice);

        //shows computer and user choice
        console.log(`Computer: ${computerChoice}\nYou: ${userChoice}\n\n`);

        //prints the result of the round
        console.log(play);
        if(play==='You win!'){
            userScore++;
        }
        else if(play==='You lose.'){
            computerScore++;
        }
        console.log(`SCORE:\nComputer: ${computerScore}\nUser Score: ${userScore}`);
    }

    if(userScore==0 && computerScore==0 || userScore===computerScore){
        console.log('TIE GAME!');
    }
    else{
        if(userScore>computerScore){
            console.log('YOU WIN THE GAME!');
        }
        else{
            console.log('YOU LOSE THE GAME! COMPUTER WINS!');
        }
    }

    restartConfirmation();
}


// game();



