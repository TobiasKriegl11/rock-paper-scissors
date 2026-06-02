// Create a function named getComputerChoice
//Use Math.random to create a number between 0 and < 1
//multiply Math.random by 3
//Round number down with Math.floor, then add 1
//Store randomly generated number inside a variable called randomNumber
//Assign 1 to rock, 2 to paper, 3 to scissors

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return ("Rock");
    } else if (randomNumber === 2) {
        return ("Paper");
    } else {
        return ("Scissors");
    }
}


/*Create a function named getHumanChoice
Get user input with the prompt method
Store user input in a variable called userInput
Return userInput */

function getHumanChoice () {
    prompt("Please enter your choice: ", "Rock, Paper, or Scissors");
}
getHumanChoice()


/*Create variable humanScore
Create variable computerScore
Initialize those variables with the value 0*/

let humanScore = 0;
let computerScore = 0;