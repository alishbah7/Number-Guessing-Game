#! /usr/bin/env node
import inquirer from "inquirer";
// 1. Computer will generate a random number
// 2. User will give the input to guess a number
// 3. Comparing a user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
// the random method will generate the random value between 0 to 1 and the floor method will round down that value
// (*100) will generate any value under 100 and then (+ 1) will add 1 to that value!   
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1-100:"
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congrats! You have guessed the right number.");
}
else {
    console.log("You guessed the wrong number");
}
;
