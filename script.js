let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

//Getting the computer's choice
function getComputerChoice(){
    const choiceList = ['rock', 'paper', 'scissors'];
    //Math.random() works great here because arrays are indexed from 0
    const computerChoice = choiceList[Math.floor(Math.random() * choiceList.length)];
    return computerChoice;
}

function getHumanChoice(){
    let playerChoice = prompt('rock, paper, scissors').toLowerCase();
    return playerChoice;
}

function playRound(humanChoice, computerChoice){
    console.log(`Round: ${roundCount += 1}`);
    console.log('You: ' + humanChoice);
    console.log('Computer: ' + computerChoice);

   /* if(humanChoice === computerChoice){
        console.log('Draw! You both choose ' + humanChoice);
    } else if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('You lose! paper beats rock');
        computerScore += 1;
    } else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log('You lose! scissors beats paper');
        computerScore += 1;
    } else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log('You lose! rock beats scissors')
    } else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('You win! paper beats rock');
        humanScore += 1;
    } else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('You win! scissors beats paper');
        humanScore += 1;
    } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('You win! rock beats scissors');
        humanScore += 1;
    }
 } */

 for(let i = 0; i < 5; i++){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
 }

 //template literals obey line breaks
 console.log(`Total scores:
    You: ${humanScore}
    computer: ${computerScore}`);

if(humanScore === computerScore){
    console.log('Game ends in a draw');
} else if(humanScore > computerScore){
    console.log('Congratulations! You win the game');
} else {
    console.log('Sorry! Computer wins the game')
}