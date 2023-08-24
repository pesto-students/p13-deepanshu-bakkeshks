function calcWordFrequencies() {
  var inputText = prompt("Enter a list of words separated by spaces:");

  var words = inputText.split(" ");
  var wordFrequencyMap = new Map();

  // Loop through the words and update the word frequencies in the map
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase(); // Convert to lowercase to count words case-insensitively

    if (wordFrequencyMap.has(word)) {
      // If the word is already in the map, increment its frequency
      wordFrequencyMap.set(word, wordFrequencyMap.get(word) + 1);
    } else {
      // If the word is not in the map, add it with a frequency of 1
      wordFrequencyMap.set(word, 1);
    }
  }

  // Print the word frequencies to the console
  wordFrequencyMap.forEach(function (value, key) {
    console.log(key + " " + value);
  });
}

calcWordFrequencies();
