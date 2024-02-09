#! /usr/bin/env node
import inquirer from 'inquirer';
function main() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'num1',
            message: "Enter the First number"
        },
        {
            type: 'input',
            name: 'num2',
            message: "Enter the second number"
        },
        {
            type: 'list',
            name: 'operation',
            choices: ['+', '-', '*', '/'],
            message: "Enter your operation"
        },
        //enter your Questions
    ])
        .then((answers) => {
        const { operation, num1, num2 } = answers;
        if (operation == "+") {
            sum(Number(num1), Number(num2));
        }
        else if (operation == "-") {
            substract(Number(num1), Number(num2));
            ;
        }
        else if (operation == "*") {
            multiply(Number(num1), Number(num2));
            ;
        }
        else if (operation == "/") {
            divide(Number(num1), Number(num2));
            ;
        }
        else {
            console.log('Invalid operation');
        }
        //Use user feedback for... whatever!!
    })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
}
function sum(num1, num2) {
    const result = num1 + num2;
    console.log("Sum", result);
}
function substract(num1, num2) {
    const result = num1 - num2;
    console.log("substract", result);
}
function multiply(num1, num2) {
    const result = num1 * num2;
    console.log("multiply", result);
}
function divide(num1, num2) {
    const result = num1 / num2;
    console.log("divide", result);
}
main();
