function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guessesLeft = totalGuesses;
  let guess;
  let correctGuess = false;

  while (guessesLeft > 0 && !correctGuess) {
    guess = prompt("Enter a number between 1 and 100:");

    if (guess === null || guess === "") {
      return 0;
    } else if (isNaN(guess)) {
      prompt("Please enter a number.");
      continue;
    }

    if (guess < numToGuess) {
      prompt(`${guess} is too small. Guess a larger number.`);
    } else if (guess > numToGuess) {
      prompt(`${guess} is too large. Guess a smaller number.`);
    } else {
      correctGuess = true;
    }

    guessesLeft--;
  }

  if (correctGuess) {
    return guessesLeft;
  } else {
    return 0;
  }
}

playGuessingGame(3);
