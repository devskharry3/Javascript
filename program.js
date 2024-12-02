const readlineSync = require('readline-sync');

class Program {
    static isPalindrome(number) {
        const str = number.toString();
        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    static isPrime(number) {
        if (number <= 1) {
            return false;
        }

        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    static main() {
        const n = parseInt(readlineSync.question("Input n: ").trim(), 10);

        let count = 0;
        let num = 2;

        while (count < n) {
            if (this.isPalindrome(num) && this.isPrime(num)) {
                console.log(`Prime Palindrome ${count}: ${num}`);
                count++;
            }
            num++;
        }
    }
}

// To run the program
Program.main();
