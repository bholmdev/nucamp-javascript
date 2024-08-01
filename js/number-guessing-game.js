function runGame() {
    const target = Math.floor(Math.random() * 100) + 1;

    let guessString = "";
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    do {
        guessString = prompt("I am thinking of a number in the range of 1 to 100.\n\nWhat is the number?");
        if (guessString === null) {
            return
        }
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert("You got it!  The number was " + target + ".\n\nIt took you " + numTries + " tries to get it.");
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert("You have not entered a number.\n\nPlease enter a number in the range of 1 - 100.");
    } else if (guessNumber < 1 || guessNumber > 100) {
        alert("Please enter an integer in the range of 1 - 100.");
    } else if (guessNumber > target) {
        alert("Your number is too high.");
    } else if (guessNumber < target) {
        alert("Your number is too small.");
    } else {
        correct = true;
    }
    return correct;
}