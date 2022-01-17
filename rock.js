let options = ["rock","paper","scissors"];

function computerPlay(){
    
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

const playerSelection = prompt("enter your choice ");
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));
