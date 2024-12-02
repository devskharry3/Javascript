class Program {
    static main(){
        //Symbols are askipped for in  
        //Symbols properties do not participate in for..in loop 

        //for instance: 
        let id = Symbol("id");
        let user = {
            name: "John",
            age: 30,
            [id]: 123
        };

        for (let key in user) 
            console.log(key); //only gon print name, age without symbols n and without content assigned to name and age 

        //The direct access by the symbol works 
        console.log("Direct: " + user[id]); //this only print the id  content
    }
}

Program.main();