const game = () => {

    let pScore = 0;
    let cScore = 0;

const options = document.querySelectorAll(".options button");

let computerOptions = ["rock","paper","scissors"];

options.forEach( options => {
    options.addEventListener("click", function(){
        //computers choice
        const computerNumber = Math.floor(Math.random()*3);
        const computerSelection = computerOptions[computerNumber];
        playRound(this.textContent, computerSelection);
    })
});
//this is where i updated the score by first creating a function for the score
const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

}

//this is where we play the actual game
const playRound = (playerSelection, computerSelection) => {
    //here is where we show the programme shows who won
    const winner = document.querySelector(".winner");
    // comparing the selections
    if (playerSelection == computerSelection){
        winner.textContent = "It is a tie";
        return;
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        winner.textContent = "Player wins";
        pScore++; //this increases the score everytime
        updateScore(); //this calls the function everytime this condition is met
        return;
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        winner.textContent = "Player wins"; 
        pScore++;
        updateScore();
        return;
    }else if (computerSelection == "rock" && playerSelection == "scissors"){
        winner.textContent = "You lose"; 
        cScore++;
        updateScore();
        return;
    } else if (computerSelection == "paper" && playerSelection == "rock"){
        winner.textContent = "You lose"; 
        cScore++;
        updateScore();
        return;
    }else if (computerSelection == "scissors" && playerSelection == "paper"){
        winner.textContent = "You lose"; 
        cScore++;
        updateScore();
        return;
    }      
}

}
game();


//this was the code before i added the UI
/*function computerPlay(){
    
    b = options[Math.floor(Math.random()*options.length)];
    return b;

}

function playRound(playerSelection, computerSelection){
    
    if (playerSelection == computerSelection){
        return "tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "player wins";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "player wins";
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "player wins";
    }else if (computerSelection == "rock" && playerSelection == "scissors"){
        return "you lose";
    } else if (computerSelection == "paper" && playerSelection == "rock"){
        return "you lose";
    }else if (computerSelection == "scissors" && playerSelection == "paper"){
        return "you lose";
    }      
}

//const playerSelection = prompt("enter your choice ");
const computerSelection = computerPlay()
const playerSelection = function (){
    console.log('button clicked');
}

console.log(playRound(playerSelection, computerSelection));*/
