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

/*Create a new function named playRound
Define parameters for playRound: humanChoice and computerChoice
Use these two parameters to take the human and computer choices as arguments*/

/*
*/

/*FUNCTION playGame()
    Phase 1: Setup
    SET humanScore = 0
    SET computerScore = 0

    Phase 2: Round Logic
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
    END FUNCTION
        IF human wins THEN 
            RETURN "human"
        ELSE IF computer wins THEN 
            RETURN "computer"
        ELSE 
            RETURN "tie"
    END FUNCTION
    
    Phase 3: The 5 Rounds
    ROUND 1
    SET humanSelection = getHumanChoice()
    SET computerSelection = getComputerChoice()
    SET roundWinner = playRound(humanSelection, computerSelection)
    
    IF roundWinner is "human" THEN increase humanScore by 1
    ELSE IF roundWinner is "computer" THEN increase computerScore by 1

    // ROUNDS 2, 3, 4, 5
    Repeat the exact same steps as ROUND 1 four more times
    
    // Phase 4: Declaring the Champion
    IF humanScore > computerScore THEN
        PRINT "You won the game! Final score: " + humanScore + " to " + computerScore
    ELSE IF computerScore > humanScore THEN
        PRINT "You lost the game! Final score: " + humanScore + " to " + computerScore
    ELSE
        PRINT "The game ends in a tie! Final score: " + humanScore + " to " + computerScore
    END IF

END FUNCTION
*/

function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {

        let capitalizedHumanChoice = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1);
        let capitalizedComputerChoice = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1);

        if (humanChoice === computerChoice) {
            console.log("It's a tie! " + capitalizedHumanChoice + " draws " + computerChoice + ".");
            return "tie";
         } else if (humanChoice === "rock" && computerChoice === "scissors" 
            || humanChoice === "paper" && computerChoice === "rock" 
            || humanChoice === "scissors" && computerChoice === "paper") {
          console.log("You win! " + capitalizedHumanChoice + " beats " + computerChoice + "."); 
          return "human";      
        } else if (humanChoice === "rock" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "rock") {
          console.log("You lose! " + capitalizedComputerChoice + " beats " + humanChoice + ".");
          return "computer"
        } else {
          console.log("Invalid entry. Please enter your choice again and check for typos.")
          return "invalid";
        }
    }

    for (let i = 0; i < 5; i++) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let winner = playRound(humanSelection, computerSelection);

        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("You won the game! Final score: " + humanScore + " to " + computerScore)
    } else if (computerScore > humanScore) {
        console.log("You lost the game! Final score: " + humanScore + " to " + computerScore)
    } else {
        console.log("The game ends in a tie! Final score: " + humanScore + " to " + computerScore)
    }
    
}
playGame();