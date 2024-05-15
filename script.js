//Selecting Buttons
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");


// selecting score info and mssgs

const scoreMssg = document.querySelector(".scoreMssg");
const plrSign = document.querySelector(".plrsign")
const compSign = document.querySelector(".compsign")
// Selecting Scores
const playerScore = document.querySelector(".plyr-scr");
const compScore = document.querySelector(".comp-scr");

let playerScr = 0;
let compScr = 0;
function getComputerChoice(){
    const arr = ["✊", "✋", "✌️"];
    const opt =arr[Math.floor(Math.random() *3)];
    return opt;
}
let computerSelection=  getComputerChoice();
let pChoice = '';

rockBtn.addEventListener("click", function(){
    pChoice = '✊';
    computerSelection = getComputerChoice();
    plrSign.innerText = "✊";
    compSign.innerText = computerSelection;
    playRound(pChoice, computerSelection);
    checkScore(playerScr, compScr);
})


paperBtn.addEventListener("click", function(){
    pChoice = '✋';
    plrSign.innerText = "✋";
    computerSelection = getComputerChoice();
    compSign.innerText = computerSelection;
    playRound(pChoice, computerSelection);
    checkScore(playerScr, compScr);

})


scissorBtn.addEventListener("click", function(){
    pChoice = '✌️';
    plrSign.innerText = "✌️";
    playRound(pChoice, computerSelection);
    compSign.innerText = computerSelection;
    computerSelection = getComputerChoice();
    checkScore(playerScr, compScr);

})
function checkScore(playerScr, compScr){
    if(playerScr >=5){
        alert("Player wins, Reload to play Again");
       
        playerScore.innerText = playerScr;
        compScore.innerText = compScr; 
        playerScr=0;
        compScr = 0;
    }
    else if(compScr >= 5){
        alert("Computer wins, Reload to play Again");
       
        playerScore.innerText = playerScr;
        compScore.innerText = compScr;
         playerScr=0;
        compScr = 0;
    }

}

function playRound(pChoice, computerSelection){
    if(pChoice == '✊' && computerSelection =='✌️'){
        scoreMssg.innerText="Rock beats scissor, player Wins!";
        playerScr++;
        playerScore.innerText = playerScr;
    }
else if(pChoice == '✋' && computerSelection =='✊'){
    scoreMssg.innerHTML="Paper beats Rock, player Wins!";
    playerScr++;
    playerScore.innerText = playerScr;
}
else if(pChoice == '✌️' && computerSelection =='✋'){
    scoreMssg.innerHTML="Scissor beats Paper, player Wins!";
    playerScr++;
    playerScore.innerText = playerScr;
}
else if(pChoice == '✌️' && computerSelection =='✊'){
    scoreMssg.innerHTML= "Rock beats scissor, Computer Wins!";
    compScr++;
    compScore.innerText= compScr;
}
else if(pChoice == '✊' && computerSelection =='✋'){
scoreMssg.innerHTML="Paper beats Rock, computer Wins!";
compScr++;
compScore.innerText= compScr;
}
else if(pChoice == '✋' && computerSelection =='✌️'){
scoreMssg.innerHTML="Scissor beats Paper, Computer Wins!";
compScr++;
compScore.innerText= compScr;
}
else if(pChoice == computerSelection){
    scoreMssg.innerHTML= `Its a tie!`;
}

}


