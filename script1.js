
class SimpleCalculator {
    static main() {
        console.log("Simple Calculator");

        // Input
        const num1 = parseFloat(prompt("Enter the first number: "));
        const op = prompt("Enter an operator (+, -, *, /): ");
        const num2 = parseFloat(prompt("Enter the second number: ")); 

        // Calculate and display result using switch case
        let result = 0;

        switch (op) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    console.log("Cannot divide by zero.");
                    return;
                }
                break;
            default:
                console.log("Invalid operator.");
                return;
        }

        console.log(`Result: ${num1} ${op} ${num2} = ${result}`);
    }
}

// To run the calculator
SimpleCalculator.main();