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
    
    if (playerSelection == "Rock" && computerSelection == "Rock" || 
        playerSelection == "Paper" && computerSelection == "Paper" ||
        playerSelection == "Scissors" && computerSelection == "Scissors"){
        

            return message="It was a tie, both selected " + playerSelection + ".";

        } else if 
        (playerSelection == "Rock" && computerSelection === "Scissors" || 
        playerSelection == "Scissors" && computerSelection == "Paper" ||
        playerSelection == "Paper" && computerSelection == "Rock") {
        
            return message="Player Wins, " + playerSelection + " beats " + computerSelection;
        }
    }
    function playerSelection(item) {
        var move = item;
        return move;
    }
  
       