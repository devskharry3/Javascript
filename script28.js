class Program {
    static main() { 
        //Arrays 
        //is array copied? 

        let fruits = ["Apples", "Pear", "Orange"];
        let shoppingCart = fruits;

        shoppingCart.push("Banana");

        console.log(fruits.length) 

    //For instance: 
    //Mix of values 
    let arr = ['Apple' , {name: 'John'}, true, function() {console.log("hello");}  ]; 
    
    //get the object at index 1 and then show its name 
    console.log(arr[1].name); //John  

    //get the function at index 3 and run it 
    arr[3](); //hello will appear for this 

    /**Trailling comma 
    An Array, just like an object, may end with comma :*/ 
    let fruits1 = [
        "Apple", 
        "Orange",
        "Plum",
    ]; 
    console.log(fruits1);
    //The trailing comma style makes it easier to insert/remove items, because all the lines looks alike 

    /*Methods pop/push, shift/unshift  
    A queue is one of the most common uses of an array.In computer science, this means ordered collection of elements which supports two operations 
    Push : appends an elements to the end 
    shift get an element from the beginning advancing the queue, so that the 2nd element becomes the first 
     

    Methods that works with the end of the array: 
    pop 
    Extracts is the last element of the array and returns it : */

    let fruits2 = ["Apple", "Orange", "Pear"]; 
    console.log(fruits2.pop()); //remove "Pear" and alert it 
    console.log(fruits2); //Apple , orange  /n/n

    //push append the element to the end of the array 

    let fruits3 = ["Apple", "Orange"]; 
    fruits3.push("Pear"); 

    console.log(fruits3); // apple, orange , pear 

    //The call fruits.push(...) is equal to fruits[fruits.length] 

    /*Methods that work with the beginning of the array:  
    shift 
    Extracts the first element of the array and returns it 
    */ 
   let fruits4 = ["Apple", "orange", "Pear"]; 
   console.log(fruits4.shift()); //remove Apple and alert it 
   console.log(fruits4); // orange, pear 

   //Unshift Add the element to the beginning of the array 

   let fruits5 = ["Orange", "Pear"];
   fruits5.unshift('Apple');
   console.log(fruits5); 
    

    }
}
Program.main();