class Program {
    static main() {
        let user = { name: "John" };
        let admin = { name: "Admin" };

        function sayHi() {
            console.log(this.name);
        }

        // Use the same function in two objects
        user.f = sayHi;
        admin.f = sayHi;

        /*
        These calls have different 'this'
        'this' inside the function is the object 'before the dot'
        */
        
        user.f(); // John (this == user)
        admin.f(); // Admin (this == admin)

        // Incorrect: admin[f](); (f is a property, not a symbol)
        // Correct usage:
        admin.f(); // Admin
    }
}

Program.main();
