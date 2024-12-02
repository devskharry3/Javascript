class program {
    static main() {
        let user = {
            name : "john",
            age: 30,
            isAdmin: true
        };

        for (let key in user) {

            console.log(key);
             //values for the keys 
              console.log(user[key]);
        }

    }
}

program.main();