// ASK USER ROCK PAPER SCISSORS
// SET USER INPUT EQUAL TO VARIABLE



// COMPUTER GIVES US RANDOM INPUT
// USE MATH.RANDOM TO GET NUMBER 1-3
// SET NUMBER EQUAL TO ROCK PAPER OR SCISSORS
// RETURN STRING


// SEE WHICH ONE WINS

// IF USER IS ROCK, HE BEATS SCISSORS BUT LOSES TO PAPER

// IF USER IS PAPER, HE BEATS ROCK BUT LOSES TO SCISSORS

// IF USER IS SCISSORS, HE BEATS PAPER BUT LOSES TO ROCK

// OUTPUT WINNER

// PLAY BEST TO 5

const computerSelection = () => { // GETS COMPUTER INPUT
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

const playerSelection = () => { // GETS USER INPUT
    let playerSelection = prompt('Rock... Paper... Scissors... SHOOT!').toLowerCase();
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt('Try Again! Rock... Paper... Scissors... SHOOT!').toLowerCase();
    }
    return playerSelection;
}

function playGame(user, computer) { // PLAYS A SINGLE GAME, USER VS COMPUTER
    if (user === 'rock') {
        if (computer === 'scissors') {
            return 'YOU WIN! ROCK BEATS SCISSORS!';
        } else if (computer === 'paper') {
            return 'YOU LOSE! PAPER BEATS ROCK!';
        } else {
            return 'YOU TIED!';
        }
    } else if (user === 'paper') {
        if (computer === 'rock') {
            return 'YOU WIN! PAPER BEATS ROCK!';
        } else if (computer === 'scissors') {
            return 'YOU LOSE! SCISSORS BEATS PAPER!';
        } else {
            return 'YOU TIED!';
        }
    } else if (user === 'scissors') {
        if (computer === 'paper') {
            return 'YOU WIN! SCISSORS BEATS PAPER!';
        } else if (computer === 'rock') {
            return 'YOU LOSE! ROCK BEATS SCISSORS!';
        } else {
            return 'YOU TIED!';
        }
    }
}

// PLAY A BEST OF 3 GAME
// AFTER EVERY GAME, DISPLAY THE WINNER, ADD SCORE TO WHOEVER WON, DISPLAY SCORES
// CHECK TO SEE IF SOMEONE HAS REACHED THREE
// IF THEY HAVE, DECLARE THEM THE WINNER
// IF NOT, PLAY ANOTHER GAME

function game() {
    let userTotalScore = 0;
    let computerTotalScore = 0;
    for (let i = 0; i < 5; i++) {
        let playRound = playGame(playerSelection(), computerSelection());
        if (playRound === 'YOU WIN! ROCK BEATS SCISSORS!' || playRound === 'YOU WIN! PAPER BEATS ROCK!' || playRound === 'YOU WIN! SCISSORS BEATS PAPER!') {

        }
    }
}
game();

