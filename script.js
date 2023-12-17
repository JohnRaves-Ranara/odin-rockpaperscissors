
let choices = ['rock', 'paper', 'scissors'];




function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(computerChoice, userChoice){
    
    if(userChoice=='rock'){
        if(computerChoice==='paper'){
            return `You lose.`;
        }
        else if(computerChoice==='rock'){
            return `It's a tie!`;
        }
        else{
            return `You win!`;
        }
    }
    else if(userChoice==='paper'){
        if(computerChoice==='rock'){
            return `You win!`;
        }
        else if(computerChoice==='scissors'){
            return `You lose.`;
        }
        else{
            return `It's a tie!`;
        }
    }
    else{
        if(computerChoice==='rock'){
            return `You lose.`;
        }
        else if(computerChoice==='scissors'){
            return `It's a tie!`;
        }
        else{
            return `You win!`;
        }
    }
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


game();



