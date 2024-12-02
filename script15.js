class Program {
    static main() {
        // Object.assign copies both string and symbol properties 

        let id = Symbol("id");
        let user = {
            [id]: 123
        };

        let clone = Object.assign({}, user);
        console.log(clone[id]); // Output will be 123 

        // Read from the global registry 
        let globalId = Symbol.for("id"); // If the symbol did not exist, it is created 

        // Read it again (maybe from another part of the code) 
        let globalIdAgain = Symbol.for("id");

        // The same symbol 
        console.log(globalId === globalIdAgain); // True 

        // Symbols inside the registry are called global symbols 
    }
}

Program.main();
