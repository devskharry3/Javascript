class Program{
    static main() {
        //toString -> value0f for "string" hin 
        // valueof -> toString otherwise 
        /*For instance, here user does the same as above using a combination value of */  
        let user = {
            name: "John",
            money: 1000,

            //for hint ="string" 
            toString() {
                return `{name: "${this.name}"}`;
            },

            //for hint ="number " or default
            valueof() {
                return this.money;
            } 
        };

        console.log(user);
        console.log(+user);
        console.log(user + 500); //ValueOf -> 1500  

        /*if return is called with an object then it is returned instead of this
        like example below  

        function BigUser() {
        this.name = "John";

        return { name: "Godzilla"}; 
        
        }

        console.log(new BigUser().name);

        */ 


    }
}
Program.main();