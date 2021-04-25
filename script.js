let btns = document.querySelectorAll('button');
let userScore = document.getElementById('userScore1');
let gameScore = document.getElementById('gameScore1');
let cpScore = document.getElementById('cpScore1');


btns.forEach((button) => {
  button.addEventListener('click', () => {
    game();
  })
})

function computerPlay() {
  const num = Math.floor(Math.random() * 3) + 1;

  if(num === 1) {
    return 'rock';
  }else if(num === 2) {
    return 'paper';
  }else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  
  if(playerSelection === computerSelection) {
    return ('Its a tie');
  }else if(playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
    return ('you lose');
  }else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
    return ('you win');
  }else{
    return ('put a valid word');
  }
}

let computerScore = 0;
let playerScore = 0;
let i = 0;

function game() {

  let playerSelection = 'rock';
  let result = playRound(playerSelection, computerPlay());
    
  if(playerScore < 5 && computerScore < 5){

    if(result.indexOf('win') !== -1) {

      playerScore++;
      gameScore.appendChild(document.createTextNode(` Player won Round ${i+1}. `));
      gameScore.appendChild(document.createElement('br'));
      gameScore.appendChild(document.createElement('br'));
      userScore.appendChild(document.createTextNode(` Player Score is ${playerScore}`))
      userScore.appendChild(document.createElement('br'));
      userScore.appendChild(document.createElement('br'));
      i++;

      if(playerScore === 5) {
        gameScore.appendChild(document.createTextNode( ` The Winner of the Game is the Player with a score of ${playerScore} to a computer score of ${computerScore}. `));
        gameScore.appendChild(document.createElement('br'));
      }

    }else if(result.indexOf('lose') !== -1) {

      computerScore++;
      gameScore.appendChild(document.createTextNode(` Computer won Round ${i+1}. `));
      gameScore.appendChild(document.createElement('br'));
      gameScore.appendChild(document.createElement('br'));
      cpScore.appendChild(document.createTextNode(` Computer Score is ${computerScore}`));
      cpScore.appendChild(document.createElement('br'));
      cpScore.appendChild(document.createElement('br'));
      i++;

      if(computerScore === 5) {
        gameScore.appendChild(document.createTextNode(` The Winner of the Game is the Computer with a score of ${computerScore} to a Player score of ${playerScore}. `))
        gameScore.appendChild(document.createElement('br'));
      }

    }else if(result.indexOf('tie') !== -1) {
      gameScore.appendChild(document.createTextNode(` Round ${i+1} finished in a tie. `));
      gameScore.appendChild(document.createElement('br'));
      gameScore.appendChild(document.createElement('br'));
      i++;
    }

  }else {
    alert('game is over refresh page to try again');
  }

}



