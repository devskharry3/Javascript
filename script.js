class TemperatureConverter {
    static main() {
        console.log("Temperature Unit Converter");

        let numConversions = 1;

        do {
            console.log(`\nConversion ${numConversions}:`);

            // Input
            let userInput = prompt("Enter temperature value along with unit (e.g., '25 C' or '77 F' or '298.15 K'): ").trim();

            while (!userInput || !this.validateInput(userInput)) {
                userInput = prompt("Invalid input. Please enter the temperature value with unit: ").trim();
            }

            // Conversion
            const inputParts = userInput.split(' ');
            const inputValue = parseFloat(inputParts[0]);
            const unit = inputParts[1][0].toUpperCase();

            let convertedValue;
            if (unit === 'C') {
                convertedValue = this.celsiusToFahrenheit(inputValue);
            } else if (unit === 'F') {
                convertedValue = this.fahrenheitToCelsius(inputValue);
            } else if (unit === 'K') {
                convertedValue = this.celsiusToKelvin(inputValue);
            } else {
                convertedValue = 0;
            }

            // Determine hot or cold
            const temperatureCategory = convertedValue >= 30 ? "hot" : "cold";

            // Output
            console.log(`Temperature: ${inputValue} ${unit}`);
            console.log(`Converted Temperature: ${convertedValue} ${unit}`);
            console.log(`Category: ${temperatureCategory}`);

            numConversions++;

            const moreConversions = prompt("Do you want to perform more conversions? (y/n): ").trim().toLowerCase();
            if (moreConversions !== 'y') break;
        } while (true);
    }

    static validateInput(input) {
        const inputParts = input.split(' ');

        if (inputParts.length !== 2) {
            console.log("Invalid input format.");
            return false;
        }

        const unit = inputParts[1][0].toUpperCase();

        if (unit !== 'C' && unit !== 'F' && unit !== 'K') {
            console.log("Invalid unit. Please use 'C', 'F', or 'K'.");
            return false;
        }

        return true;
    }

    static celsiusToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    static fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    static celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }
}

// To run the converter
TemperatureConverter.main();