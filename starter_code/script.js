// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    var object = ["rock", "paper", "scissors"];
    var randomObject = Math.floor(Math.random() * 2);
    var choice = object[randomObject];
    return choice;
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    var result = "";
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    if (userChoice == computerChoice) {
        result = "draw";
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        result = "user wins";
    } if (userChoice == "paper" && computerChoice == "rock"){
        result = "user wins";
    } else if (userChoice == "scissors" && computerChoice == "paper"){
        result = "user wins";
    } if (computerChoice == "rock" && userChoice == "scissors"){
        result = "computer wins";
    } else if (computerChoice == "paper" && userChoice == "rock"){
        result = "computer wins";
    } if (computerChoice == "scissors" && userChoice == "paper" ){
        result = "computer wins";
    }
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"
    console.log(result);
    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
    $('#computer-choice').html(computerChoice);
    $('#winner').html(result);
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = generateComputerChoice();

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = "rock";
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.

    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    pickWinner(userChoice, computerChoice);

});