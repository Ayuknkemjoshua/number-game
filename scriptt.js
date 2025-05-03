const secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let guess = null;

while (guess !== secretNumber) {
  const input = prompt("Guess a number between 1 and 100:");
  guess = parseInt(input);

  if (isNaN(guess)) {
    alert("That's not a valid number. Try again!");
  } else if (guess < secretNumber) {
    alert("Too low! Try again.");
  } else if (guess > secretNumber) {
    alert("Too high! Try again.");
  } else {
    alert("🎉 You got it! The number was " + secretNumber);
  }
}