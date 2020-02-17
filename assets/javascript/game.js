// I need to display the words as blanks
// I need the user to guess a letter
// If user guesses wrong, place that letter in "letters guessed"
// If user guesses correctly, reveal letter in the blank
// If user guesses entire word, increase "wins"



// words available for guessing
var words = ["yosemite", "glacier", "yellowstone", "zion", "rocky mountain", "olympic", "grand canyon", "great sand dunes", "hot springs", "great smoky mountains", "arches", "canyonlands", "denali", "joshua tree"];

// causes words to be selected at random
var word = words[Math.floor(Math.random() * words.length)];

// number of guesses remaining
var numOfGuesses = 10;

// variable to hold number of wins starting at 0
var wins = 0;

// variable to store the current word to be guessed
var wordToBeGuessed = [];

// loops through the list of random words and gives each letter in that word a "_"
 for (var i = 0; i < word.length; i++) {
    wordToBeGuessed[i] = "_";
    }

// variable that holds the number of letters remaining to be guessed in the current word
var remainingLetters = word.length;

// ****** GAME LOOP ******

while (remainingLetters > 0) {
    document.getElementById("blanks").innerHTML = wordToBeGuessed.join(" ");

    var guess = onkeydown();
}


