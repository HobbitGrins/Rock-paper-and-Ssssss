let playerScore = 0;
let computerScore = 0;

function gameRound(playerItem, computerItem){
  
  
  while (playerScore < 5 && computerScore < 5)  {playerItem = prompt('choose rock, paper or scissors');
    if(playerItem != 'rock' && playerItem != 'paper' && playerItem != 'scissors' ){
      alert('Please play the game correctly. That is invalid');
      return;
      
    }


    const randomNumber = Math.floor(Math.random() * 10 );
    if (randomNumber >= 6) {
      computerItem = 'rock';
    } else if (randomNumber >= 3){
      computerItem = 'paper';
    }else {
      computerItem = 'scissors';
    }

    if (playerItem == computerItem) {
      alert("It's a tie. No points added");
      
    } else if (
      (playerItem == 'rock' && computerItem == 'scissors') || 
      (playerItem == 'paper' && computerItem == 'rock') || 
      (playerItem == 'scissors' && computerItem == 'paper') 
      
    ) {
      alert('You win the round computer chose ' + computerItem );
      playerScore = playerScore + 1;
      alert(`You ${playerScore} || Computer ${computerScore}`);
      
    } else {
      alert('You lose the round computer chose ' + computerItem);
      computerScore = computerScore + 1;
      alert(`You ${playerScore} || Computer ${computerScore}`);
    }

    if (playerScore == 5){
      alert("Your score has reached it's limit in other words you won");
      return;
    } else if ( computerScore == 5 ) {
      alert("Computer's score has reached it's limit in other words you have tasted defeat.");
      return;
    }
  }
}


gameRound();