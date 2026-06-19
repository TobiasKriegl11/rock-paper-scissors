const buttonRock = document.querySelector("#rock");   
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const runningScore = document.querySelector("#runningScore");
const checkWinnerDiv = document.querySelector("#checkWinner");
const restart = document.querySelector("#restartButton");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);

    const gameOptions = ["rock", "paper", "scissors",]
    return gameOptions[randomNumber];
}

function playRound (humanChoice, computerChoice) {
    let capitalizedHumanChoice = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1);
    let capitalizedComputerChoice = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1);

    if (humanChoice === computerChoice) {
        results.textContent = `It's a tie! ${capitalizedHumanChoice} draws ${computerChoice}.`
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "paper" && computerChoice === "rock" 
        || humanChoice === "scissors" && computerChoice === "paper") {
        results.textContent = `You win! ${capitalizedHumanChoice} beats ${computerChoice}.`
        return "human";      
    } else {
        results.textContent = `You lose! ${capitalizedComputerChoice} beats ${humanChoice}.`
        return "computer"
    };
};

function playGame(playerChoice) {
    const compChoice = getComputerChoice();
    const roundWinner = playRound(playerChoice, compChoice);

    if (roundWinner === "human") humanScore++;
    if (roundWinner === "computer") computerScore++;
    if (roundWinner === "tie") {
        humanScore++;
        computerScore++;}

    runningScore.textContent = `Human: ${humanScore}; Computer: ${computerScore};`;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5 && computerScore === 5) {
        checkWinnerDiv.textContent = "The game ends in a tie!"
    };
    if (humanScore === 5) {
        checkWinnerDiv.textContent = "You won! Computer lost!"; setButtonsDisabled(true);
    };
    if (computerScore === 5) {
        checkWinnerDiv.textContent = "You lost! Computer won!"; setButtonsDisabled(true);
    };
};

function setButtonsDisabled(setting) {
    buttonRock.disabled = setting;
    buttonPaper.disabled = setting;
    buttonScissors.disabled = setting;
}

buttonRock.addEventListener("click", () => playGame("rock"));
buttonPaper.addEventListener("click", () => playGame("paper"));
buttonScissors.addEventListener("click", () => playGame("scissors"));
restart.addEventListener("click", () => {
    setButtonsDisabled(false);
    humanScore = 0; computerScore = 0;
    results.textContent = ""; runningScore.textContent = ""; checkWinnerDiv.textContent = "";
});