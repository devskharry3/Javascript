class Program{
    static main() {
        function makeUser() {
            return {
                name:"John",
                ref() {
                    return this;
                }
            };
        };
        let user = makeUser(); 

        console.log(user.ref().name); //john
    }
}
Program.main();