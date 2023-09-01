// Function to calculate the vulnerability score
function updateScore() {
  // Get all radio button groups
  const propertyGroups = ["AV", "AC", "PR", "UI", "scope", "conf", "integ"];

  // Check if one button from each property is selected
  const allPropertiesSelected = propertyGroups.every((propertyGroup) => {
    const selectedButton = document.querySelector(
      `input[name="${propertyGroup}"]:checked`
    );
    return selectedButton !== null;
  });

  if (allPropertiesSelected) {
    // All properties are selected, so hide the warning
    document.getElementById("warning").style.display = "none";

    // Calculate the vulnerability score
    let score = 0;
    propertyGroups.forEach((propertyGroup) => {
      const selectedButton = document.querySelector(
        `input[name="${propertyGroup}"]:checked`
      );
      score += parseFloat(selectedButton.value);
    });

    // Calculate the final vulnerability score
    const ScopeStatus = parseFloat(
      document.querySelector('input[name="scope"]:checked').value
    );
    const BaseConfidentiality = parseFloat(
      document.querySelector('input[name="conf"]:checked').value
    );
    const BaseIntegrity = parseFloat(
      document.querySelector('input[name="integ"]:checked').value
    );
    const BaseAvailability = 0.0; // Set a default value for BaseAvailability
    const ScoreExploitability =
      parseFloat(document.querySelector('input[name="AV"]:checked').value) *
      parseFloat(document.querySelector('input[name="AC"]:checked').value) *
      parseFloat(document.querySelector('input[name="PR"]:checked').value) *
      parseFloat(document.querySelector('input[name="UI"]:checked').value);

    const ScoreBase = BaseConfidentiality + BaseIntegrity + BaseAvailability;
    const ScoreFinal =
      ScopeStatus * (3.326258289 * ScoreBase + 1.1 * ScoreExploitability);

    // Ensure the score is within the range [0, 10]
    score = Math.min(Math.max(score, 0), 10);

    // Round the score to one decimal place
    score = score.toFixed(1);

    // Display the calculated score
    document.getElementById("score").textContent = score;
  } else {
    // Not all properties are selected, so show the warning
    document.getElementById("warning").style.display = "block";

    // Reset the score display
    document.getElementById("score").textContent = "--";
  }
}

// Add event listeners to radio buttons for updating the score
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", updateScore);
});

// Initialize the score on page load
updateScore();
