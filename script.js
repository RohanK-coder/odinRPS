
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
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const edit = document.querySelector("#winLose");

rock.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    const playerSelection = rock.textContent;
    rock.setAttribute("style","font-size:20px");
    edit.textContent = playRound(playerSelection, computerSelection);
})
paper.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    const playerSelection = paper.textContent;
    paper.setAttribute("style","font-size:20px");
    edit.textContent = playRound(playerSelection, computerSelection);
})
scissor.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    const playerSelection = scissor.textContent;
    scissor.setAttribute("style","font-size:20px");
    edit.textContent = playRound(playerSelection, computerSelection);
})



