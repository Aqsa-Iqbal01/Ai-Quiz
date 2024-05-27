#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my advanture quiz game:");
console.log("you are required to gain maximum 4 points for the window.");
let points = 0;
// Question 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "Typescript is a superset off?",
        type: "list",
        choices: ["python", "c++", "java", "javaScript"]
    }
]);
if (question1.one == "javaScript") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
// Question 2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who is the founder of microsoft",
        type: "list",
        choices: ["elon musk", "bill gates", "mark", "harry"]
    }
]);
if (question2.two == "bill gates") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
// Question 3
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "capital of pakistan",
        type: "list",
        choices: ["karachi", "punjab", "islamabad", "kpk"]
    }
]);
if (question3.three == "islamabad") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
// Question 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "who is the current governor of sindh",
        type: "list",
        choices: ["kamran tessori", "zardari", "nawaz sharif", "mustafa kamal"]
    }
]);
if (question4.four == "kamran tessori") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
// Question 5
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "In with language you are hearing my voice",
        type: "list",
        choices: ["english", "sindhi", "urdu", "french"]
    }
]);
if (question5.five == "urdu") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
// Output conditions
if (points >= 5) {
    console.log("Congratulations!");
    console.log(`your points: ${points}`);
}
else {
    console.log("you lose! try next time");
    console.log(`your points: ${points}`);
}
