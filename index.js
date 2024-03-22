#!/usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number
//user input for guessing number
//compare to computer generate random number with user number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6 :",
    },
]);
console.log(answer);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations! you win");
}
else {
    console.log("Oops! you failed");
}
