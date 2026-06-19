function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return ("rock");
    } else if (randomNumber === 2) {
        return ("paper");
    } else {
        return ("scissors");
    }
}


function getHumanChoice () {
    let userInput = prompt("Please enter your choice: ");
    if (userInput === null) return "";
    return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {

    let capitalizedHumanChoice = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1);
    let capitalizedComputerChoice = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1);

    if (humanChoice === computerChoice) {
        results.textContent ="It's a tie! " + capitalizedHumanChoice + " draws " + computerChoice + ".";
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "paper" && computerChoice === "rock" 
        || humanChoice === "scissors" && computerChoice === "paper") {
        results.textContent = "You win! " + capitalizedHumanChoice + " beats " + computerChoice + "."; 
        return "human";      
    } else if (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock") {
        results.textContent = "You lose! " + capitalizedComputerChoice + " beats " + humanChoice + ".";
        return "computer"
    } else {
        results.textContent = "Invalid entry. Please enter your choice again and check for typos.";
        return "invalid";
    }
}

const buttonRock = document.querySelector("#rock");   
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener("click", () => {
    const compChoice = getComputerChoice();
    const roundWinner = playRound("rock", compChoice);

    if (roundWinner === "human") humanScore++;
    if (roundWinner === "computer") computerScore++;
    if (roundWinner !== "human" && roundWinner !== "computer") humanScore++, computerScore++;

    runningScore.textContent = "Human: " + humanScore + "; " + "Computer: " + computerScore + ";";

    checkWinner();
});
buttonPaper.addEventListener("click", () => {
    const compChoice = getComputerChoice();
    const roundWinner = playRound("paper", compChoice);

    if (roundWinner === "human") humanScore++;
    if (roundWinner === "computer") computerScore++;
    if (roundWinner !== "human" && roundWinner !== "computer") humanScore++, computerScore++;

    runningScore.textContent = "Human: " + humanScore + "; " + "Computer: " + computerScore + ";";

    checkWinner();
});
buttonScissors.addEventListener("click", () => {
    const compChoice = getComputerChoice();
    const roundWinner = playRound("scissors", compChoice);

    if (roundWinner === "human") humanScore++;
    if (roundWinner === "computer") computerScore++;
    if (roundWinner !== "human" && roundWinner !== "computer") humanScore++, computerScore++;

    runningScore.textContent = "Human: " + humanScore + "; " + "Computer: " + computerScore + ";";

    checkWinner();
});

const results = document.querySelector("#results");

const runningScore = document.querySelector("#runningScore");

const checkWinnerDiv = document.querySelector("#checkWinner");
 
const checkWinner = function () {
    if (humanScore === 5) {
        checkWinnerDiv.textContent = "You won! Computer lost!"; buttonRock.disabled = true; buttonPaper.disabled = true; buttonScissors.disabled = true;
    };
    if (computerScore === 5) {
        checkWinnerDiv.textContent = "You lost! Computer won!"; buttonRock.disabled = true; buttonPaper.disabled = true; buttonScissors.disabled = true;
    };
};

const restart = document.querySelector("#restartButton");

restart.addEventListener("click", () => {
    buttonRock.disabled = false; buttonPaper.disabled = false; buttonScissors.disabled = false;
    humanScore = 0; computerScore = 0;
    results.textContent = ""; runningScore.textContent = ""; checkWinnerDiv.textContent = "";
});