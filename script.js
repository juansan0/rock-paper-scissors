function computerPlay(){
    var rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return "rock"
         break;
        case 1:
            return "papers"
           break;
        case 2:
            return "scissors"
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection){
    switch (computerSelection) {
        case "rock":
            if (playerSelection == "rock") {
                return "draw"
            }
            else if (playerSelection == "papers") {
                return "player wins"
            }
            else if (playerSelection == "scissors") {
                return "computer wins"
            }
            break;
        case "papers":
            if (playerSelection == "papers") {
                return "draw"
            }
            else if (playerSelection == "scissors") {
                return "player wins"
            }
            else if (playerSelection == "rock") {
                return "computer wins"
            }
            break;
        case "scissors":
            if (playerSelection == "scissors") {
                return "draw"
            }
            else if (playerSelection == "rock") {
                return "player wins"
            }
            else if (playerSelection == "paper") {
                return "computer wins"
            }
            break;
        default:
            break;
    }
}

function game(){

}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log("player pick: " + playerSelection + " | " + "computer pick: " + computerSelection + " | " +
playRound(playerSelection, computerSelection));