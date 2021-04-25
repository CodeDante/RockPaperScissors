  
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
  
      function gameTime(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        
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
  
      function game() {
       let computerScore = 0;
        let playerScore = 0;
        for(let i = 0; i < 5; i++) {
          let playerSelection = prompt('What is your pick')
          let result = gameTime(playerSelection, computerPlay());
          if(result.indexOf('win') !== -1) {
            playerScore++;
            console.log(`User won Round ${i+1}.`)
          }else if(result.indexOf('lose') !== -1) {
            computerScore++;
            console.log(`Computer won Round ${i+1}.`)
          }else if(result.indexOf('tie') !== -1) {
            console.log(`Round ${i+1} finished in a tie.`)
          }else{
            console.error('Incorrect input.');
            alert("Please try again. Your options are Rock, Paper, or Scissors.");
            i--;
          }
      }
  
      if(playerScore > computerScore) {
        console.log(`Player won ${playerScore} to ${computerScore}.`);
      }else if(computerScore > playerScore) {
        console.log(`Computer won ${computerScore} to ${playerScore}.`);
      }else {
        console.log(`Game finished in a tie with a Player score of ${playerScore} and a computer score of ${computerScore}.`);
      }
    }
  
      game();
  
  