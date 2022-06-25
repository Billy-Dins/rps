/* Rock, Paper, Scissors

/*    

HTML
<h1>Rock Paper Scissors!</h1>
        <select class="selection">
            <option>Enter-Selection</option>
            <option id="1">Rock!</option>
            <option id="2">Paper!</option>
            <option id="3">Scissors!</option>
        </select>
        <button class="rps-btn">Rock, Paper, Scissors</button>
        <p></p>
HTML

1. begin with a function called computerPlay that will 
randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.


a. create a function called computerPlay that runs a 
random math algorithm and returns either 1, 2 or 3.

*/

// let rpsBtn = document.querySelector(".rps-btn");
// let playerSelection = document.querySelector(".selection");
// let paragraph = document.querySelector("p");

// rpsBtn.addEventListener("click", playRound);

// function updateValue() {
//     if (playerSelection.value == "Rock!") {
//         return 1
//     } else if (playerSelection.value == "Paper!") {
//         return 2
//     } else if (playerSelection.value == "Scissors!") {
//         return 3
//     } else {
//         return null
//     }
// }

// function computerPlay(){
//     var number = Math.floor(Math.random() * 3) + 1;
//     if (number == 1) {
//         return number;
//     } else if (number == 2){
//         return number;
//     } else if (number == 3) {
//         return number;
//     } else {
//         return null
//     }
// }


// function playRound() {
//     console.log(updateValue(), computerSelection)
//         if ((updateValue() == 1) && (computerSelection == 1)) {
//             paragraph.innerText = "Draw!";
//         } else if ((updateValue() == 1) && (computerSelection == 2)) {
//             paragraph.innerText = "You lose! Paper beats Rock!";
//         } else if ((updateValue() == 1) && (computerSelection == 3)) {
//             paragraph.innerText = "you Win! Rock beats Scissors!";
//         } else if ((updateValue() == 2) && (computerSelection == 2)) {
//             paragraph.innerText = "Draw!";
//         } else if ((updateValue() == 2) && (computerSelection == 1)) {
//             paragraph.innerText = "You Win! Paper beats Rock!";
//         } else if ((updateValue() == 2) && (computerSelection == 3)) {
//             paragraph.innerText = "You Lose! Scissors beat Paper!";
//         } else if ((updateValue() == 3) && (computerSelection == 3)) {
//             paragraph.innerText = "Draw!";
//         } else if ((updateValue() == 3) && (computerSelection == 1)) {
//             paragraph.innerText = "You Lose! Rock beats Scissors!";
//         } else if ((updateValue() == 3) && (computerSelection == 2)) {
//             paragraph.innerText = "You Win! Scissors beat Paper!";
//         } else {
//             paragraph.innerText = "Please make your selection";
//         }
//     }

// const computerSelection = computerPlay()
// const newValue = updateValue();

// rpsBtn.addEventListener("click", playRound);

/*
2. Write a function that plays a single round of Rock Paper Scissors
then returns a string that declares the winner of the round, like...
"You Lose! Paper beats Rock"

a. add a selector with 3 values (rock, paper, scissors).
b. add a variable called playerSelection that assigns the selection to it's value.
c. let computerValue = computerValue;
d. Create a function with 2 entries, playerSelection, and computerValue.
e. assign button event to playRound() function.
f.  -if playerSelection == 1 and computerValue == 1 console.log("Draw!")
    -if playerSelection == 1 and computerValue == 2 console.log("You Lose! Paper beats Rock!")
    -if playerSelection == 1 and computerValue == 3 console.log("You Win! Rock beats Scissors!")
    
    -if playerSelection == 2 and computerValue == 1 console.log("You Win! Paper beats Rock!")
    -if playerSelection == 2 and computerValue == 2 console.log("Draw!")
    -if playerSelection == 2 and computerValue == 3 console.log("You Lose! Scissors beat Paper!")
    
    -if playerSelection == 3 and computerValue == 1 console.log("You Lose! Rock beats Scissors!")
    -if playerSelection == 3 and computerValue == 2 console.log("You Win! Scissors beats Paper!")
    -if playerSelection == 3 and computerValue == 3 console.log("Draw!")
*/


// ----- ---RPS--- -----
// ----- Attempt 2 ----- 
// Instead of a selector within the HTML, use 3 individual buttons
// that call a single playRound function.

// Step 1. Create 3 HTML button elements and imbed them within a variable.
// Step 2. Write a computerPlay function that will randomly return either 'Rock', 
// 'Paper', or 'Scissors'. This can maybe be done using 
// arr[Math.floor(Math.random() * arr.;ength)]
// Step 3. If user selects 'Rock' button, run the computerPlay function within a new 
// function that compares the users selection to the computerPlay output.
var up = document.getElementById('GFG_UP');
var down = document.getElementById('GFG_DOWN');
 
var arr = ["GFG_1", "GeeksForGeeks",
        "Geeks", "Computer Science Portal"];
 
up.innerHTML = "Click on the button to select"
                + " random element from the"
                + " array.<br><br>" + arr;
 
function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}
 
function GFG_Fun() {
    down.innerHTML = arr[Math.floor(random(1, 5))-1];
}




