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
  // Clear the computer's move timeout
  clearTimeout(computerMoveTimeout);
  computerMoveTimeout = 0;

  // Loop through all game board buttons and reset them
  const buttons = getGameBoardButtons();
  for (let button of buttons) {
    button.innerHTML = "";
    button.classList.remove("x", "o");
    button.disabled = false;
  }

  // Allow the player to take a turn
  playerTurn = true;

  // Set the text of the turn information paragraph
  const turnInfo = document.getElementById("turnInfo");
  turnInfo.textContent = "Your turn";
}

function boardButtonClicked(button) {
  // If it's the player's turn and the button is not already marked
  if (playerTurn && button.innerHTML === "") {
    button.innerHTML = "X";
    button.classList.add("x");
    button.disabled = true;
    switchTurn();
  }
}

function switchTurn() {
  // Check for a winner or draw
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

    // Toggle playerTurn
    playerTurn = !playerTurn;
  }
}

function makeComputerMove() {
  // Get all available buttons
  const buttons = getGameBoardButtons();
  const availableButtons = [];

  for (let button of buttons) {
    if (button.innerHTML !== "X" && button.innerHTML !== "O") {
      availableButtons.push(button);
    }
  }

  // Choose a random button from available buttons
  const randomIndex = Math.floor(Math.random() * availableButtons.length);
  const selectedButton = availableButtons[randomIndex];

  // Set the button's inner HTML to "O" (computer's move)
  selectedButton.innerHTML = "O";
  selectedButton.classList.add("o");
  selectedButton.disabled = true;

  // Switch back to the player's turn
  switchTurn();
}
