class program{
    static main() {
        function pow(x,n) {

            let result = 1;

            for (let i = 0; i< n; i++) {
                result*=x;
            }

            return result;
        }
        pow(5,6);
        
    }
}
program.main();