import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        { name: "operation",
            message: "please selact your desired option",
            type: "list",
            choices: ["withdraw", "current balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is:" + myBalance);
        }
        else {
            console.log("you have insufficient balance.");
        }
    }
    if (operationAns.operation === "fast cash") {
        let actionAns = await inquirer.prompt([
            {
                name: "action",
                message: "Select the amount you want to fast cash",
                type: "list",
                choices: ["1000", "3000", "5000", "15000"]
            }
        ]);
        if (actionAns.action <= myBalance) {
            let balance2 = myBalance - actionAns.action;
            console.log(`your remaining balance is: ${balance2}`);
        }
        else {
            console.log(`you have insufficient balance`);
        }
    }
    if (operationAns.operation === "current balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("incorrect pin code");
}
