/* Rock, Paper, Scissors

1. begin with a function called computerPlay that will 
randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.


a. create a function called computerPlay that runs a 
random math algorithm and returns either 1, 2 or 3.

*/
































let rpsBtn = document.querySelector(".rps-btn");
let playerSelection = document.querySelector(".selection");
let paragraph = document.querySelector("p");

let newValue = updateValue();

rpsBtn.addEventListener("click", playRound);

function updateValue() {
    if (playerSelection.value == "Rock!") {
        return 1
    } else if (playerSelection.value == "Paper!") {
        return 2
    } else if (playerSelection.value == "Scissors!") {
        return 3
    } else {
        return null
    }
}

function computerPlay(){
    const number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        console.log("Rock!")
            return 'Rock!'
    }   else if (number == 2){
        console.log("Paper!")
            return 'Paper!'
    }   else if (number == 3) {
        console.log("Scissors!")
            return 'Scissors!'
    }
}

function playRound() {
    let number = Math.floor(Math.random() * 3) + 1;
    console.log(updateValue(), number)
        if ((updateValue() == 1) && (number == 1)) {
            return paragraph.innerText = "Draw!"
        } else if ((updateValue() == 1) && (number == 2)) {
            return paragraph.innerText = "You lose! Paper beats Rock!"
        } else if ((updateValue() == 1) && (number == 3)) {
            return paragraph.innerText = "you Win! Rock beats Scissors!"
        } else if ((updateValue() == 2) && (number == 2)) {
            return paragraph.innerText = "Draw!"
        } else if ((updateValue() == 2) && (number == 1)) {
            return paragraph.innerText = "You Win! Paper beats Rock!"
        } else if ((updateValue() == 2) && (number == 3)) {
            return paragraph.innerText = "You Lose! Scissors beat Paper!"
        } else if ((updateValue() == 3) && (number == 3)) {
            return paragraph.innerText = "Draw!"
        } else if ((updateValue() == 3) && (number == 1)) {
            return paragraph.innerText = "You Lose! Rock beats Scissors!"
        } else if ((updateValue() == 3) && (number == 2)) {
            return paragraph.innerText = "You Win! Scissors beat Paper!"
        } else {
            return paragraph.innerText = "Please make your selection"
        }
    }

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





