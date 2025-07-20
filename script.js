let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let userText = document.getElementById("user");
let compText = document.getElementById("comp");
let result = document.getElementById("result");

let choices = ["rock", "paper", "scissors"];

// Event listeners using normal functions
rock.addEventListener("click", function () {
    play("rock");
});

paper.addEventListener("click", function () {
    play("paper");
});

scissors.addEventListener("click", function () {
    play("scissors");
});

// Game logic
function play(userSelection) {
    let compSelection = choices[Math.floor(Math.random() * 3)];

    // Show what both selected
    userText.innerText = "You chose: " + userSelection;
    compText.innerText = "Computer chose: " + compSelection;

    // Result logic
    if (userSelection === compSelection) {
        result.innerText = "It's a draw!";
    } else if (
        (userSelection === "rock" && compSelection === "scissors") ||
        (userSelection === "paper" && compSelection === "rock") ||
        (userSelection === "scissors" && compSelection === "paper")
    ) {
        result.innerText = "You win!";
    } else {
        result.innerText = "Computer wins!";
    }
}
