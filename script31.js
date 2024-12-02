class Program {
    static main() {

        /*Sum input numbers 
        Write the function sumInput() that 
        1. Asks the user for values using prompt and stores the values in th array 
        2. finishes asking when the user enters a non-numeric value, an empty string, or presses "cancel"
        3. Calculate and returns the sum of array items 

        ps A zero 0 is valid number, please don't stop the input on zero 

        */

        function sumInput() {
            let numbers = []; 
             while (true) {
                let value = prompt("A number please?", 23);

                //should we cancel? 
                if (value == "" || value === null || !isFinite(value) ) break; 

                numbers.push(value);
             }

             let sum = 0; 
             for (let number of numbers ) {
                sum += number;
             }
             return sum;
        }
        console.log(sumInput);
    }
}
Program.main()