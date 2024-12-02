class Program{
    static main() {
        //Repeat until the input is a humber 

        function readNumber() {
            let num;

            do{
                num = prompt("Enter a number please", 0);
            } while (!isFinite(num));

            if (num === null || num ==='') return null;

            return +num;
        }

        console.log(`Read: ${readNumber()}`);
    }
}
Program.main();