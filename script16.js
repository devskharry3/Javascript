class Program {
    static main() { 
        // Symbol.keyFor for global symbols
        // Not only does Symbol.for(key) return a symbol by name,
        // but there is a reverse call: Symbol.keyFor(sym) that returns the name by a global symbol.
        // For instance:

        let sym = Symbol.for("name");
        let sym2 = Symbol.for("id"); 

        // Get name from symbol 
        console.log(Symbol.keyFor(sym)); // It shows 'name'
        console.log(Symbol.keyFor(sym2)); // It shows 'id'
    }
}

Program.main();
