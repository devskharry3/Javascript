class program{
    static main(){
        let user = {
            name: "john",
            age: 40

        }

        function sayHi() {
            console.log("Hello");
        }

        user.sayHi = sayHi
        user.sayHi();
    }

}

program.main();