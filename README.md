# rock-paper-scissors

A classic Rock, Paper, Scissors game played entirely in the browser console. This project was built as a step-by-step exercise to learn JavaScript functions, variables, conditional logic, and scope.

## How the Game Works

The game runs a 5-round tournament between a human player and the computer:
1. The Setup: The game initializes the scores for both players at 0.
2. The Rounds: The game prompts the human player for an input (Rock, Paper, or Scissors) and randomly generates a choice for the computer.
3. Score Tracking: The results of each round are analyzed, a winner is announced in the console, and the running score gets updated.
4. The End: After the 5th round, the game compares the final scores and declares the winner or announces a tie.

## Code Structure

The project is built using JavaScript:

 `getComputerChoice()`: Uses `Math.random` to randomly select and return "rock", "paper", or "scissors".
 `getHumanChoice()`: Uses a browser `prompt` to safely capture the player's input and normalize it to lowercase.
 `playGame()`: The function that holds the score variables and manages the tournament flow.
  `playRound()`: A helper function nested inside `playGame` that compares choices, prints the round result, and returns the winner to update the score variables.

## How to Play

1. Open the project in any web browser.
2. Open your browser's Developer Tools and look at the **Consol** tab.
3. Call the function by typing `playGame();` if it isn't automatically called.
4. Respond to the pop-up prompts for 5 rounds and watch the tournament unfold in the console!

## What I Learned
* How to use function parameters and return values to pass information around.
* How variable scope works by nesting functions inside other functions.
* Using conditional `if / else if / else` logic to handle complex win/loss game rules.
* Code ordering: `console.log()` messages need to run before `return` because `return` statements exit a funcition.
