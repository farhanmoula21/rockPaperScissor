const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const txt = document.querySelector(".textbox");
function getComputerChoice(){
    const arr = ["rock", "paper", "scissor"];
    const opt =arr[Math.floor(Math.random() *3)];
    return opt;
}
const computerSelection=  getComputerChoice();
let pChoice = "";
rockBtn.addEventListener("click", function(){
    getComputerChoice();
  pChoice = 'rock';
  playRound(pChoice, computerSelection);
})
paperBtn.addEventListener("click", function(){
    getComputerChoice();
  pChoice = 'paper';
  playRound(pChoice, computerSelection);
})
scissorBtn.addEventListener("click", function(){
    getComputerChoice();
  pChoice = 'scissor';
  playRound(pChoice, computerSelection);
})



function playRound(pChoice, computerSelection){
    if(pChoice == 'rock' && computerSelection =='scissor'){
        txt.innerHTML="Rock beats scissor, player Wins!";
    }
else if(pChoice == 'paper' && computerSelection =='rock'){
    txt.innerHTML="Paper beats Rock, player Wins!";
}
else if(pChoice == 'scissor' && computerSelection =='paper'){
    txt.innerHTML="Scissor beats Paper, player Wins!";
}
else if(pChoice == 'scissor' && computerSelection =='rock'){
    txt.innerHTML= "Rock beats scissor, Computer Wins!";
}
else if(pChoice == 'rock' && computerSelection =='paper'){
txt.innerHTML="Paper beats Rock, computer Wins!";
}
else if(pChoice == 'paper' && computerSelection =='scissor'){
txt.innerHTML="Scissor beats Paper, Computer Wins!";
}
else if(pChoice == computerSelection){
    txt.innerHTML= `Its a tie!`;
}

}


// function playGame(){
//         playRound(playerChoice,computerSelection);
//     }
// playGame();