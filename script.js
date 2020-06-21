function computerPlay() {
               
                computerChoice = ['ROCK','PAPER','SCISSORS'];
                computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)];
                return computerPick;
            }
            
            function playRound(playerSelection, computerSelection) {
                
                if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
                        return console.log('Computer chose ' + computerSelection + '! You win!');
                } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
                        return console.log('Computer chose ' + computerSelection + '! You lose!');
                } else if (playerSelection == 'ROCK' && computerSelection == 'ROCK') {
                        return console.log('Computer chose ' + computerSelection + '! Tie Game!');
                } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
                        return console.log('Computer chose ' + computerSelection + '! You win!');
                } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
                        return console.log('Computer chose ' + computerSelection + '! You lose!');
                } else if (playerSelection == 'PAPER' && computerSelection == 'PAPER') {
                        return console.log('Computer chose ' + computerSelection + '! Tie Game!');
                } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
                        return console.log('Computer chose ' + computerSelection + '! You win!');
                } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
                        return console.log('Computer chose ' + computerSelection + '! You lose!');
                } else if(playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
                        return console.log('Computer chose ' + computerSelection + '! Tie Game!');
                }
 
            }
            
            function game() {
             
                for (let game = 1; game <= 5; game++) {
                    console.log('Game:' + game);
                    let computerSelection = computerPlay();
                    let playerSelection = prompt('Game time! Pick rock, paper or scissors!').toUpperCase();
                    playRound(playerSelection, computerSelection);
                }
            }

            game();