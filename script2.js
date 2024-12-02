class Program {
    static main() {
        const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const targetSum = 15;

        console.log(`Input Array: [${inputArray.join(", ")}]`);
        console.log(`Target Sum: ${targetSum}`);
        console.log("Output:");

        for (let i = 0; i < inputArray.length - 2; i++) {
            for (let j = i + 1; j < inputArray.length - 1; j++) {
                for (let k = j + 1; k < inputArray.length; k++) {
                    const sum = inputArray[i] + inputArray[j] + inputArray[k];
                    if (sum === targetSum) {
                        console.log(`Triplet found: ${inputArray[i]}, ${inputArray[j]}, ${inputArray[k]}`);
                        break; // Break to avoid duplicate triplets with the same starting element
                    }
                }
            }
        }
    }
}

// To run the program
Program.main();
