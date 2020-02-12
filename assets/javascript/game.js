// creates an array of letters to be guessed
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// creates variable to hold number of wins starting at 0
var wins = 0;

// creates varibales that hold references to places in the HTML where we want to display things
var instructionsText = document.getElementById("instructions-text")
var winsText = document.getElementById("wins-text")
var currentWord = document.getElementById("currentword-text")
var userGuess = document.getElementById("userguess-text")
var guessRemaining = document.getElementById("guessremaining")
var lettersGuessed = document.getElementById("lettersguessed")

// looping throgh each item in the array and logging a message to the console
for (var i = 0; i < letters.length; i++) {
console.log("I guessed " + letters[i]);
}
