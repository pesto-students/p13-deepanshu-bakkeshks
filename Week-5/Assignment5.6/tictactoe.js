let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
  MORE_MOVES_LEFT: 1,
  HUMAN_WINS: 2,
  COMPUTER_WINS: 3,
  DRAW_GAME: 4,
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // Setup the click event for the "New game" button
  const newBtn = document.getElementById("newGameButton");
  newBtn.addEventListener("click", newGame);

  // Create click-event handlers for each game board button
  const buttons = getGameBoardButtons();
  for (let button of buttons) {
    button.addEventListener("click", function () {
      boardButtonClicked(button);
    });
  }

  // Clear the board and start a new game
  newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3
// elements are the top row, the next 3 the middle row, and the last 3 the
// bottom row.
function getGameBoardButtons() {
  return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
  const buttons = getGameBoardButtons();

  // Ways to win
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  // Check for a winner first
  for (let indices of possibilities) {
    if (
      buttons[indices[0]].innerHTML !== "" &&
      buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
      buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML
    ) {
      // Found a winner
      if (buttons[indices[0]].innerHTML === "X") {
        return gameStatus.HUMAN_WINS;
      } else {
        return gameStatus.COMPUTER_WINS;
      }
    }
  }

  // See if any more moves are left
  for (let button of buttons) {
    if (button.innerHTML !== "X" && button.innerHTML !== "O") {
      return gameStatus.MORE_MOVES_LEFT;
    }
  }

  // If no winner and no moves left, then it's a draw
  return gameStatus.DRAW_GAME;
}

function newGame() {
  // TO-DO
  //  Logic
  // 1] Use clearTimeout() & then set computerMoveTimeout back to 0
  // 2] Loop through all game board buttons and set the inner HTML of each to an empty string.
  // 3] Allow the player to take a turn by setting playerTurn to true.
  // 4] Set the text of the turn information paragraph to "Your turn".

  clearTimeout(computerMoveTimeout);
  computerMoveTimeout = 0;
  const buttons = getGameBoardButtons();
  for (let button of buttons) {
    button.innerHTML = "";
    button.classList.remove("x", "o");
    button.disabled = false;
  }

  playerTurn = true;
  const turnInfo = document.getElementById("turnInfo");
  turnInfo.textContent = "Your turn";
}

function boardButtonClicked(button) {
  // TO-DO
  // Logic : If playerTurn is true:
  // 1] Set the button's inner HTML to "X".
  // 2] Add the "x" class to the button.
  // 3] Set the button's disabled attribute to true so the button cannot be clicked again.
  // 4] Call switchTurn() so the computer can take a turn.
  if (playerTurn && button.innerHTML === "") {
    button.innerHTML = "X";
    button.classList.add("x");
    button.disabled = true;
    switchTurn();
  }
}

function switchTurn() {
  // TO-DO
  // Logic
  // 1] Call checkForWinner() to determine the game's status.
  // 1.1] If more moves are left:
  // 1.1.1] If switching from the player's turn to the computer's turn, use setTimeout() to call makeComputerMove() after 1 second (1000 milliseconds).
  // Assign the return value of setTimeout() to computerMoveTimeout. The timeout simulates the computer "thinking", and prevents the nearly-instant
  // response to each player move that would occur from a direct call to makeComputerMove().
  // 1.1.2] Toggle playerTurn's value from false to true or from true to false.
  // 1.1.3] Set the turn information paragraph's text content to "Your turn" if playerTurn is true, or "Computer's turn" if playerTurn is false.
  // 1.2]   In the case of a winner or a draw game, do the following:
  // 1.2.1] Set playerTurn to false to prevent the user from being able to place an X after the game is over.
  // 1.2.2] If the human has won, display the text "You win!" in the turn info paragraph.
  // 1.2.3] If the computer has won, display the text "Computer wins!" in the turn info paragraph.
  // 1.2.4] If the game is a draw, display the text "Draw game" in the turn info paragraph.
  const status = checkForWinner();
  const turnInfo = document.getElementById("turnInfo");

  if (status === gameStatus.HUMAN_WINS) {
    turnInfo.textContent = "You win!";
    playerTurn = false;
  } else if (status === gameStatus.COMPUTER_WINS) {
    turnInfo.textContent = "Computer wins!";
    playerTurn = false;
  } else if (status === gameStatus.DRAW_GAME) {
    turnInfo.textContent = "Draw game";
    playerTurn = false;
  } else {
    // If more moves are left, switch to the computer's turn
    if (playerTurn) {
      turnInfo.textContent = "Computer's turn";
      computerMoveTimeout = setTimeout(makeComputerMove, 1000);
    } else {
      turnInfo.textContent = "Your turn";
    }

    playerTurn = !playerTurn;
  }
}

function makeComputerMove() {
  // TO-DO
  // Logic
  // Implement the makeComputerMove() function to do the following:
  // Choose a random, available button, and set the button's inner HTML to "O".
  // Add the "o" class to the button.
  // Set the button's disabled attribute to true.
  // Call switchTurn() at the end of the function to switch back to the player's turn.
  const buttons = getGameBoardButtons();
  const availableButtons = [];

  for (let button of buttons) {
    if (button.innerHTML !== "X" && button.innerHTML !== "O") {
      availableButtons.push(button);
    }
  }

  const randomIndex = Math.floor(Math.random() * availableButtons.length);
  const selectedButton = availableButtons[randomIndex];
  selectedButton.innerHTML = "O";
  selectedButton.classList.add("o");
  selectedButton.disabled = true;
  switchTurn();
}
