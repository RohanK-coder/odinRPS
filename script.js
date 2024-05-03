console.log("Working");
const getComputerChoice = () => {
    const choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
    }
const playRound= (playerSelection,computerSelection) => {
    if(playerSelection===computerSelection){
        return "It's a tie";
    }
    else if((playerSelection === "rock" && computerSelection == "scissor") || (playerSelection === "paper" && computerSelection === "rock")||(playerSelection === "scissor"&&computerSelection === "paper")){
        return "You Win";
    } 
    else{
        return "You Lose";
    }

}
const playerSelection = prompt("Enter rock or paper or scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));