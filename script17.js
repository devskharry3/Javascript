class Program {
    static main() {
        let user = {
            name: "John",
            age: 30,

            sayHi() {
                console.log(this.name); // Use 'this' instead of 'user'
            }
        };

        // Call the sayHi method on the user object
        user.sayHi(); // It shows 'John'

        // If we decide to copy user to another variable and overwrite user with something else, using 'this' prevents errors
        // Demonstrated below:

        let admin = user; // Copy the reference
        user = null; // Overwrite to make things obvious

        // Call the sayHi method on the admin object
        admin.sayHi(); // It still shows 'John' because 'this' refers to 'admin'
    }
}

Program.main();
