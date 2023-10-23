function rock_scissor_paper_game() {
    "use strict";
    var playAgain ="y";
    while(playAgain === "y"){

        // collect users choice
        var userChoice = window.prompt(" choose one of your choice: rock, paper or scissor?");

        // Collect Computers choice..
        var computerChoice = Math.floor(Math.random() * 10);
        if (computerChoice <= 3) {
            computerChoice = "rock";
        } 
        else if(computerChoice > 3 && computerChoice <= 6) {
            computerChoice = "paper";
        } else if(computerChoice > 6 && computerChoice <= 10) {
            computerChoice = "scissor";
        }
        
        //playing game..
        if(userChoice === "rock" || userChoice === "scissor" || userChoice === "paper" ){

            // Comparing choices 
            if (userChoice === computerChoice){
                window.alert("That was a tie! Try Again.");
                continue;
            }

            if(userChoice === "rock") {
                if(computerChoice === "scissor") {
                    window.alert("Rock DOMINATES scissor. You Win!");
                } 
                else if(computerChoice === "paper"){
                    window.alert("Paper COVERS rock. You Lose!");
                }
                return;
            }
            else if(userChoice === "scissor") {
                if(computerChoice === "paper") {
                    window.alert("Scissor CUTS paper. You Won!");
                } 
                else if(computerChoice === "rock") {
                    window.alert("Rock DOMINATES scissor. You Lose!");
                }
                return;
            }
            else if(userChoice === "paper") {
                if(computerChoice === "rock") {
                    window.alert("Paper COVERS rock. You Win!");
                } 
                else if(computerChoice === "scissor") {
                    window.alert("Scissor CUTS paper. You Lose!");
                }
                return;
            }
        }
        else if(userChoice === "") {
            window.alert("You did not gave any inputs");
        }
        else{
            window.alert(userChoice + " is invalid choice");
        }

        playAgain = window.prompt("Do you want to play again? (y/n)");
        if(playAgain !== "y" && playAgain !== "n" ){
            window.alert(playAgain + " is not a valid input. Exit !!");
        }
    }
}

function main(){
    "use strict";
    rock_scissor_paper_game();
    window.alert("Thanks for playing");
}
main();