var randomNumber = Math.floor(Math.random() * 20) + 1;
document.getElementById("scoreBtn").disabled = true;
var guessesCorrect = 0;
var allGuesses = [];
var totalNum = 0;
var score = 0;
var highScoreCount = 0;

function submitBtn() {
  var x, text;
  x = document.getElementById("num").value;

  allGuesses.push(" " + x);
  document.getElementById("numbersGuessed").innerHTML =
    "You've already guessed: " + allGuesses;

  totalNum++;
  document.getElementById("totalGuessed").innerHTML =
    "Total Numbers Guessed: " + totalNum;

  if (x < 1 || x > 20) {
    text = "Enter a number between 1 AND 20 please.";
    document.getElementById("response").innerHTML = text;
  } else if (x == randomNumber) {
    text = "Congratulations! You got it right!";
    document.getElementById("response").innerHTML = text;
    document.getElementById("answer").innerHTML =
      "The number I chose was " + randomNumber + ".";
    document.getElementById("yourGuess").innerHTML = "You chose " + x + ".";
    // Score
    score += 5;
    document.getElementById("scoreCount").innerHTML = "Your Score: " + score;
    // Guesses
    guessesCorrect++;
    document.getElementById("correctGuesses").innerHTML =
      "Correctly Guessed: " + guessesCorrect + "/20";
  } else {
    text = "That's not it. Try again.";
    document.getElementById("response").innerHTML = text;
    // Score
    score -= 2;
    document.getElementById("scoreCount").innerHTML = "Your Score: " + score;
  }

  if (x > randomNumber) {
    alert("Guess is too high.");
  }

  if (x < randomNumber) {
    alert("Guess is too low.");
  }

  if (guessesCorrect == 20) {
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("scoreBtn").disabled = false;
  }

  if (x == randomNumber) {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    // Resets array after guessing the correct number
    allGuesses = [];
  }
}

function finalScore() {
  if (score > highScoreCount) {
    alert("You beat the high score!");
    document.getElementById("highScore").innerHTML = "Highscore: " + score;
  } else {
    alert("You didn't beat the highscore. Try again");
  }
}

// Reset Game
function restartBtn() {
  highScoreCount = score;
  score = 0;
  document.getElementById("scoreCount").innerHTML = "Your Score: " + score;
  guessesCorrect = 0;
  document.getElementById("correctGuesses").innerHTML =
    "Correctly Guessed: " + guessesCorrect + "/20";
  allGuesses = [];
  document.getElementById("numbersGuessed").innerHTML = allGuesses;
  totalNum = 0;
  document.getElementById("totalGuessed").innerHTML =
    "Total Numbers Guessed: " + totalNum;
  document.getElementById("submitBtn").disabled = false;
  document.getElementById("scoreBtn").disabled = true;
}
