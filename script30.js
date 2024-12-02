class Program {
    static main() {
        let arr = [1,2,3,4,5]; 

        arr.length = 2; //truncate to 2 elements 
        console.log(arr);

        arr.length = 5; // return length back 
        console.log(arr[3]); //undefined: The values do not return 

        //new Array() 
        /*There is one more syntax to create an array:
        */
        let arr1 = new Array("Apple", "Pear", "etc"); 

        /*it's rarely use because square brackets [] are shorter. Also there's a tricky feature 
         if new Array is called with a single argument which is a number, then it creates array without items, but with the given length 
         Let's see how one can shoot themself in the foot : */ 

         let arr2 = new Array(2); //Will it create an array of [2] ? 
         console.log(arr.length); //length 2 

         /*Array is a special kind of object, suited in storing and managing ordered data items 
         The declaration: 
         //square brackets (usual)
         let arr = [item1, item2...]; 

         new Array (exceptionally rare) 
         let arr = new Array(item1, item2...);
         */
    }
}