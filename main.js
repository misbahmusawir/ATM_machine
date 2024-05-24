#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; //dollar
console.log("ATM");
let myPin = 4321;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code:",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correcct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    console.log(operationAns);
    //Withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficinet balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
        }
    }
    //fast cash
    else if (operationAns.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select the amount which you withdraw",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`you have successfully withdraw ${fast.fastcash} in your remaning balance is ${myBalance}`);
    }
    //CheckBalance
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
