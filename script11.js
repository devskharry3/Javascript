class program{
    static main() {
        let Salaries = {
            john : 100,
            Ann: 150,
            Pete: 130
        };

        let sum = 0;
        for(let key in Salaries) {
            sum+= Salaries[key];
        }
        console.log(sum);
    }
}

program.main();