class Program {
    static main() {
        // CREATE A CALCULATOR
        let calculator = {
            sum() {
                return this.a + this.b;
            },

            mul() {
                return this.a * this.b;
            },

            read(a, b) {
                this.a = a;
                this.b = b;
            }
        };

        // Replace prompt with manual input for testing
        calculator.read(2, 3); // Set a = 2 and b = 3 for example
        console.log(calculator.sum()); // Output: 5
        console.log(calculator.mul()); // Output: 6
    }
}

Program.main();
