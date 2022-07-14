const rock = document.getElementById('rock');
const papers = document.getElementById('papers');
const scissors = document.getElementById('scissors');
const txt = document.getElementById('txt');
const playerDiv = document.getElementById('playerDiv');
const computerDiv = document.getElementById('computerDiv');
const playerScoreTxt = document.getElementById('playerScoreTxt');
const computerScoreTxt = document.getElementById('computerScoreTxt');

var playerSelection;
var computerSelection;
var rockIsClicked = false;
var papersIsClicked = false;
var scissorsIsClicked = false;
var playerScore = 0;
var computerScore = 0;
var winner;

rock.addEventListener("click", Selection);
papers.addEventListener("click", Selection);
scissors.addEventListener("click", Selection);

if (rock.addEventListener) {
    rock.addEventListener("click", function() {
        rockIsClicked = true;
        Selection();
    }, rockIsClicked = false);
}
if (papers.addEventListener) {
    papers.addEventListener("click", function() {
        papersIsClicked = true;
        Selection();
    }, papersIsClicked = false);
}
if (scissors.addEventListener) {
    scissors.addEventListener("click", function() {
        scissorsIsClicked = true;
        Selection();
    }, scissorsIsClicked = false);
}

function Selection(){
    if (rockIsClicked == true) {
        rockIsClicked = false;
        papersIsClicked = false;
        scissorsIsClicked = false;
        playerSelection = "rock";
        playerDiv.innerHTML = ("✊  ");
        computerPlay();
        playRound(playerSelection, computerSelection);
    }
    else if (papersIsClicked == true) {
        rockIsClicked = false;
        papersIsClicked = false;
        scissorsIsClicked = false;
        playerSelection = "papers";
        playerDiv.innerHTML = ("✋  ");
        computerPlay();
        playRound(playerSelection, computerSelection);
    }
    else if (scissorsIsClicked == true) {
        rockIsClicked = false;
        papersIsClicked = false;
        scissorsIsClicked = false;
        playerSelection = "scissors";
        playerDiv.innerHTML = ("✌  ");
        computerPlay();
        playRound(playerSelection, computerSelection);
    }
}

function computerPlay(){
    var rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            computerSelection = "rock";
            computerDiv.innerHTML = ("✊");
            break;
        case 1:
            computerSelection = "papers";
            computerDiv.innerHTML = ("✋  ");
            break;
        case 2:
            computerSelection = "scissors";
            computerDiv.innerHTML = ("✌  ");
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection){
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                txt.innerHTML = ("Draw");
            }
            else if (computerSelection == "papers") {
                txt.innerHTML = ("You lost!");
                computerScore++;
                computerScoreTxt.innerHTML = ("Computer: "+computerScore);
                if (computerScore == 5) {
                    winner = "Computer";
                    restartGame(winner);
                }
            }
            else if (computerSelection == "scissors") {
                txt.innerHTML = ("You won!");
                playerScore++;
                playerScoreTxt.innerHTML = ("Player: "+playerScore);
                if (playerScore == 5) {
                    winner = "Player";
                    restartGame(winner);
                }
            }
            break;
        case "papers":
            if (computerSelection == "rock") {
                txt.innerHTML = ("You won!");
                playerScore++;
                playerScoreTxt.innerHTML = ("Player: "+playerScore);
                if (playerScore == 5) {
                    winner = "Player";
                    restartGame(winner);
                }
            }
            else if (computerSelection == "papers") {
                txt.innerHTML = ("Draw");
            }
            else if (computerSelection == "scissors") {
                txt.innerHTML = ("You lost!");
                computerScore++;
                computerScoreTxt.innerHTML = ("Computer: "+computerScore);
                if (computerScore == 5) {
                    winner = "Computer";
                    restartGame(winner);
                }
            }
            break;
        case "scissors":
            if (computerSelection == "rock") {
                txt.innerHTML = ("You lost!");
                computerScore++;
                computerScoreTxt.innerHTML = ("Computer: "+computerScore);
                if (computerScore == 5) {
                    winner = "Computer";
                    restartGame(winner);
                }
            }
            else if (computerSelection == "papers") {
                txt.innerHTML = ("You won!");
                playerScore++;
                playerScoreTxt.innerHTML = ("Player: "+playerScore);
                if (playerScore == 5) {
                    winner = "Player";
                    restartGame(winner);
                }
            }
            else if (computerSelection == "scissors") {
                txt.innerHTML = ("Draw");
            }
            break;
        default:
            break;
    }
}

function restartGame(winner){
    alert(winner + " won te game!\nThe game will restart")
    playerScore = 0;
    computerScore = 0;
    playerScoreTxt.innerHTML = ("Player: "+playerScore);
    computerScoreTxt.innerHTML = ("Computer: "+computerScore);
    playerDiv.innerHTML = ("❔");
    computerDiv.innerHTML = ("❔");
    txt.innerHTML = ("Choose rock, papers or scissors");


}