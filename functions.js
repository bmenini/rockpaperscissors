function computerPlay() {
    var textArray = [
       'Rock',
       'Paper',
       'Scissors'
    ];
var randomMove = textArray[Math.floor(Math.random() * textArray.length)]; 

return randomMove;
}



 function playRound(playerSelection, computerSelection) {
    
    if (
        playerSelection == "Rock" && computerSelection == "Rock" || 
        playerSelection == "Paper" && computerSelection == "Paper" ||
        playerSelection == "Scissors" && computerSelection == "Scissors")
        {
            var message = document.getElementById('display').innerHTML = "It was a tie, both selected " + playerSelection + ".";
            return message;
            //return message="It was a tie, both selected " + playerSelection + ".";
        } else if (
        playerSelection == "Rock" && computerSelection == "Scissors" || 
        playerSelection == "Scissors" && computerSelection == "Paper" ||
        playerSelection == "Paper" && computerSelection == "Rock") {
            var message = document.getElementById('display').innerHTML = "Player Wins, " + playerSelection + " beats " + computerSelection;
            return message;
            //return message="Player Wins, " + playerSelection + " beats " + computerSelection;
        }
        else {
            var message = document.getElementById('display').innerHTML = "Player Wins, " + playerSelection + " beats " + computerSelection;
            return message;
            //return message="Computer Wins, " + computerSelection + " beats " + playerSelection ;}
    }
}

  
       