const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const header = document.querySelector('.win-or-lose');
const par = document.querySelector('.score');
let userTotalScore = 0;
let computerTotalScore = 0;

btn1.addEventListener('click', to5);

btn2.addEventListener('click', () => {
    let playerInput = 'paper'
    let computerInput = computerSelection();
    console.log(playGame(playerInput, computerInput));
})

btn3.addEventListener('click', () => {
    let playerInput = 'scissors'
    let computerInput = computerSelection();
    console.log(playGame(playerInput, computerInput));
})

function to5() {

    let playerInput = 'rock'
    let computerInput = computerSelection();

    header.textContent = playGame(playerInput, computerInput);
    if (header.textContent === 'YOU WIN! ROCK BEATS SCISSORS!' || header.textContent === 'YOU WIN! PAPER BEATS ROCK!' || header.textContent === 'YOU WIN! SCISSORS BEATS PAPER!') {
        userTotalScore++;
        par.textContent = `The score is ${userTotalScore} to ${computerTotalScore}`;
    } else if (header.textContent === 'YOU LOSE! PAPER BEATS ROCK!' || header.textContent === 'YOU LOSE! SCISSORS BEATS PAPER!' || header.textContent === 'YOU LOSE! ROCK BEATS SCISSORS!') {
        computerTotalScore++;
        par.textContent = `The score is ${userTotalScore} to ${computerTotalScore}`;
    } else {
        par.textContent = `The score is ${userTotalScore} to ${computerTotalScore}`;
    }

}



function computerSelection() { // GET COMPUTER INPUT
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playerSelection() { // GET USER INPUT
    let playerSelection = prompt('Rock... Paper... Scissors... SHOOT!').toLowerCase();
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt('Try Again! Rock... Paper... Scissors... SHOOT!').toLowerCase();
    }
    return playerSelection;
}

function playGame(user, computer) { // PLAY A SINGLE ROUND, USER VS COMPUTER (SWITCH VERSION)
    switch (user) {
        case 'rock':
            switch (computer) {
                case 'rock':
                    return 'YOU TIED!';
                case 'paper':
                    return 'YOU LOSE! PAPER BEATS ROCK!';
                case 'scissors':
                    return 'YOU WIN! ROCK BEATS SCISSORS!';
            }
        case 'paper':
            switch (computer) {
                case 'rock':
                    return 'YOU WIN! PAPER BEATS ROCK!';
                case 'paper':
                    return 'YOU TIED!';
                case 'scissors':
                    return 'YOU LOSE! SCISSORS BEATS PAPER!';
            }
        case 'scissors':
            switch (computer) {
                case 'rock':
                    return 'YOU LOSE! ROCK BEATS SCISSORS!';
                case 'paper':
                    return 'YOU WIN! SCISSORS BEATS PAPER!';
                case 'scissors':
                    return 'YOU TIED!';
            }
    }
}

function game() { // PLAY A BEST OF 5 GAME
    let userTotalScore = 0;
    let computerTotalScore = 0;
    while (userTotalScore < 5 && computerTotalScore < 5) {
        let playRound = playGame(playerSelection(), computerSelection());
        if (playRound === 'YOU WIN! ROCK BEATS SCISSORS!' || playRound === 'YOU WIN! PAPER BEATS ROCK!' || playRound === 'YOU WIN! SCISSORS BEATS PAPER!') {
            userTotalScore++;
            alert(`${playRound}\nThe score is ${userTotalScore} to ${computerTotalScore}`);
        } else if (playRound === 'YOU LOSE! PAPER BEATS ROCK!' || playRound === 'YOU LOSE! SCISSORS BEATS PAPER!' || playRound === 'YOU LOSE! ROCK BEATS SCISSORS!') {
            computerTotalScore++;
            alert(`${playRound}\nThe score is ${userTotalScore} to ${computerTotalScore}`);
        } else {
            alert(`${playRound}\nThe score is ${userTotalScore} to ${computerTotalScore}`);
        }
    }
    if (userTotalScore === 3) {
        alert(`Congrats! You have beat the computer. \nNOW GO OUTSIDE YOU RAT!`)
    } else {
        alert(`You have lost to the computer! \nI think this was the plot to terminator or something...`)
    }
}
// game();

