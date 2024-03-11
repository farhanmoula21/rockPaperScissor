function getComputerChoice(){
    const arr = ["rock", "paper", "scissor"];
    const opt =arr[Math.floor(Math.random() *3)];
    return opt;
}

const computerSelection=  getComputerChoice();

function playRound(playerChoice, computerSelection){
    if(playerChoice == 'rock' && computerSelection =='scissor'){
        console.log("Rock beats scissor, player Wins!");
    }
else if(playerChoice == 'paper' && computerSelection =='rock'){
    console.log("Paper beats Rock, player Wins!");
}
else if(playerChoice == 'scissor' && computerSelection =='paper'){
    console.log("Scissor beats Paper, player Wins!");
}
else if(playerChoice == 'scissor' && computerSelection =='rock'){
    console.log("Rock beats scissor, Computer Wins!");
}
else if(playerChoice == 'rock' && computerSelection =='paper'){
console.log("Paper beats Rock, computer Wins!");
}
else if(playerChoice == 'paper' && computerSelection =='scissor'){
console.log("Scissor beats Paper, Computer Wins!");
}
else if(playerChoice == computerSelection){
    console.log(`Its a tie!`)
}
else{
    alert("Select proper Option");
}
}


function playGame(){
    for(i=1;i<=5;i++){
        const playerChoice = prompt("Enter Your choice :Rock, Paper, or Scissor");
        playRound(playerChoice,computerSelection);
    }
}
playGame();