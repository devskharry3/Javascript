class program {
    static main() {
        /*Internals 
        An array is a special kind of object.The square object used to access a proper actually come from the object syntax.
        That's essentially the same as obj[key] is the object, while numbers are used as keys 
        They extend objects providing special methods to work with ordered collections of the length property
         but as the core it's still an object.

         Remember, there are only 7 basic types in javascript.Array is an object and thus an object
         for insrance, 

        */

         let fruits = []; //make an array 
         fruits[999999] = 5; //assign a property with the index far greater than its length 
         fruits.age = 25; //create a property within an arbitrary name
         /*That's possible because arrays are object at their base. we can add any properties to 
         But the engine will see that we are working with the array as with a regular object.Array-sum 
         optimizations are not suited for such cases and will be turned off, Their benefit dissapear 
         The ways to misuse an array: 
         .Add a non-numeric property like arr.test = 5 
         . Make holes, like:add arr[0] and then arr[1000] (and nothing between them) 
         . Fill the array in the reverse order, like arr[1000], arr[999] and so on . 
         Please think of Arrays s the special structures to work with the ordered data. They provide methods 
         for that.Arrays are carefully turned inside javascript engines to work with contige ordered data, 
          Please use them this way .and if you need arbitrary keys, chances are high  you actually rerquire a regular object{}. 

         */

          //Loops one of the oldest ways to cycle array items is the for loop over indexes: 
          let arr = ["Apple", "Orange", "Pear"];

          for(let i=0; i<arr.length; i++) { //instead of using <2 we use arr.length
            console.log(arr[i]);
          }
          //But for the arrays there is anothher form of loop, for ..of; 

          let fruits1 = ["Apple", "Orange", "Pear"];
          
          //iterates over the array elements 
          for (let fruit of fruits) {
            console.log(fruit)
          }


    }
}