class Program {
    static main() {
        // let id = Symbol("id");
        // alert(id); // cannot convert a symbol value to a string 

        // if we really want to show a symbol we need to call .toString() on it like here 

        // let id = Symbol("id");
        // console.log(id.toString()); // now works 

        // hidden properties 
        // symbols allow us to create hidden properties of an object, that no other part of the code can accidentally access or overwrite 
        // example

        let user = {name: "john"};
        let id = Symbol("id"); 

        user[id] = "ID Value";
        console.log(user[id]); // we can access the data using the symbol as the key 

        // symbols in a literal 
        // if we want to use a symbol in an object literal {} we need square brackets like this 

        id = Symbol("id"); // Reuse the variable without redeclaring it with 'let'

        user = {
            name: "john",
            [id]: 123 // not just "id:123" because we need the value from the variable 'id' as the key 
        };

        console.log(user[id]); // Log the symbol-keyed property
    }
}

Program.main();
