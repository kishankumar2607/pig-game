# Let's Play PIG!

A simple, browser-based implementation of the classic dice game **PIG**. Players take turns rolling a die to accumulate points, aiming to reach the winning total before their opponent.

## Game Rules
1. The first player to reach the winning total wins.
2. Players take turns rolling the die.
3. The turn ends when:
   - The player rolls a **1** (losing all points earned during the turn).
   - The player chooses to **hold** (adding the earned points to their total score).
4. Rolling a **1** resets the current turn score to **0**.
5. The game allows players to start a **new game** at any time.

## Features
- **Player Names**: Input fields to set player names.
- **Score Tracking**: Displays the total score for both players.
- **Dice Rolls**: Simulates rolling a die with realistic outcomes.
- **Hold Option**: Enables players to save their current turn score to the total score.
- **Winning Logic**: Determines and announces the winner once the winning total is reached.

## How to Play
1. Enter names for Player 1 and Player 2.
2. Click **New Game** to start.
3. During a turn, the current player can:
   - Click **Roll** to roll the die.
   - Click **Hold** to save the turn score to their total and pass the turn.
4. The game ends when a player’s total score reaches the winning target.

## Technologies Used
- **HTML5**: Game structure and layout.
- **CSS3**: Styling for the interface.
- **JavaScript (jQuery)**: Game logic and interactivity.
