//This code is about a set of object values which got multiply by 2 after a function is written for it .
class program {
    static main() {
        let menu = {
            width: 200,
            height: 300,
            title: "My name"
        }

        function multiplyNumeric(obj) {
            for(let key in obj) {
                if(typeof obj[key] === 'number'){
                    obj[key]*= 2;
            }

        }
    }
    console.log("Before:", menu);
    multiplyNumeric(menu);
    console.log("After:", menu);

    }
}

program.main();
