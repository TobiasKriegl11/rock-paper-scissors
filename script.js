// Create a function named getComputerChoice
//Use Math.random to create a number between 0 and < 1
//multiply Math.random by 3
//Round number down with Math.floor, then add 1
//Store randomly generated number inside a variable called randomNumber
//Assign 1 to rock, 2 to paper, 3 to scissors

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


/*Create a function named getHumanChoice
Get user input with the prompt method
Store user input in a variable called userInput
If user input is not given return ""
Return the userInput in LowerCase */

function getHumanChoice () {
    let userInput = prompt("Please enter your choice: ");
    if (userInput === null) return "";
    return userInput.toLowerCase();
}


/*Create variable humanScore
Create variable computerScore
Initialize those variables with the value 0*/

let humanScore = 0;
let computerScore = 0;


/*Create a new function named playRound
Define parameters for playRound: humanChoice and computerChoice
Use these two parameters to take the human and computer choices as arguments*/

/*
FUNCTION playRound(humanChoice, computerChoice)

    Step 1: Capitalize the inputs for formatting
    SET capitalizedHumanChoice = MAKE first letter of humanChoice uppercase
    SET capitalizedComputerChoice = MAKE first letter of computerChoice uppercase

    Step 2: Game Logic
    IF humanChoice is equal to computerChoice THEN
        PRINT "It's a tie!" + capitalizedHumanChoice draws computerChoice
        
    ELSE IF humanChoice beats computerChoice THEN
        PRINT "You win! " + capitalizedHumanChoice + " beats " + computerChoice
        
    ELSE
        PRINT "You lose! " + capitalizedComputerChoice + " beats " + humanChoice
    END IF
END FUNCTION*/

function playRound (humanChoice, computerChoice) {

    let capitalizedHumanChoice = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1);
    let capitalizedComputerChoice = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1);

    if (humanChoice === computerChoice) {
        console.log("It's a tie! " + capitalizedHumanChoice + " draws " + computerChoice + ".");
    } else if (humanChoice === "rock" && computerChoice === "scissors" 
          || humanChoice === "paper" && computerChoice === "rock" 
          || humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! " + capitalizedHumanChoice + " beats " + computerChoice + ".");       
    } else if (humanChoice === "rock" && computerChoice === "paper"
          || humanChoice === "paper" && computerChoice === "scissors"
          || humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! " + capitalizetComputerChoice + " beats " + humanChoice + ".");
    } else {
        console.log("Invalid entry. Please enter your choice again and check for typos.")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);