var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;


var numberArray = [];

for (var i = 1; i <= 120; i++) {
    numberArray.push(i);
}

console.log(numberArray);

var computerRandom;
var button1;
var button2;
var button3;
var button4;
var userTotal = 0;

var score;

var wins;
var losses;

// if (userRandomNumber.toNumber() === computerRandomNumber.toNumber()) {
//     // Add to the win counter
//     wins++;

//     // Give the user an alert
//     alert("You win!");

//     // Update the win counter in the HTML
//     document.getElementById("wins").innerHTML = wins;

//     // Restart the game
//     startGame();
// }

//     // If we've run out of guesses
//     else if (numGuesses === 0) {

//         // Add to the loss counter
//         losses++;

//         // Give the user an alert
//         alert("You lose");

//         // Update the loss counter in the HTML
//         document.getElementById("losses").innerHTML = losses;

        // Restart the game
        // startGame();

    // }

    //generate randomNumber

    // generate randomNumber for each crystal

    // need a click event when a crystal is clicked
    //capture the value of the crystal when it's clicked 
    // add points to players total score
    // if/else if statement
    //if score is = randomNumber then the user wins
    //else if score is > randomNumber then the user loses
    // wins ++
    // losses ++
    // generate all random numbers again

    // startGame()
    // It's how we we will start and restart the game.
    // (Note: It's not being run here. Function declarations like this are made for future use.)
    // function startGame() {

    //     score = 0;
    //     numGuesses = [];
    //     numberPicked = [];
    // }
    // console.log(numberPicked);


    // roundComplete() function
    // Here we will have all of the code that needs to be run after each guess is made.
    // function roundComplete() {

    //     // First, log an initial status update in the console
    //     // telling us how many wins, losses, and guesses are left.
    //     console.log("wins: " + wins + " | losses: " + losses + " | numGuesses: " + numGuesses);

    //     // HTML UPDATES
    //     // ============

    //     // Update the HTML to reflect the new number of guesses.
    //     document.getElementById("guesses-left").innerHTML = numGuesses;

    //     // This will print the array of guesses and blanks onto the page.
    //     document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    //     // This will print the wrong guesses onto the page.
    //     document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    //     // If our Word Guess string equals the solution.
    //     // (meaning that we guessed all the letters to match the solution)...
    //     if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    //         // Add to the win counter
    //         winCounter++;

    //         // Give the user an alert
    //         alert("You win!");

    //         // Update the win counter in the HTML
    //         document.getElementById("win-counter").innerHTML = winCounter;

    //         // Restart the game
    //         startGame();
    //     }

    //     // If we've run out of guesses
    //     else if (numGuesses === 0) {

    //         // Add to the loss counter
    //         lossCounter++;

    //         // Give the user an alert
    //         alert("You lose");

    //         // Update the loss counter in the HTML
    //         document.getElementById("loss-counter").innerHTML = lossCounter;

    //         // Restart the game
    //         startGame();

    //     }

    // }

    // // MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
    // // ==================================================================

    // // Starts the Game by running the startGame() function
    // startGame();

    // // Then initiates the function for capturing key clicks.
    // document.onkeyup = function (event) {

    //     // Converts all key clicks to lowercase letters.
    //     letterGuessed = String.fromCharCode(event.which).toLowerCase();

    //     // Runs the code to check for correct guesses.
    //     checkLetters(letterGuessed);

    //     // Runs the code that ends each round.
    //     roundComplete();
    // };