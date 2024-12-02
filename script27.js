class Program{
    static main() {
        //Strings 
        //Uppercase the first character . 
        /* we can't replace the first character, because strings in Javascript are immutable . 
        But we ca make a new string based on the existing one, with the uppercased first characteer:  */ 
        //let newStr = str[0].toUpperCase() + str.slice(1); 
        /*There is a small problem though.if str is empty, then str[0] is undefined, and as undefined doesn't have the toUpperCase() method we'll get an error 
         There are two variants here:  
         1. Use str.charAt(0), as it always returns a string (maybe empty) 
         2. Add a test for empty string  
         Here is the 2nd variant */ 

         /n/n
         function ucFirst(str) {
            if (!str) return str; 

            return str[0].toUpperCase() + str.slice(1);
         }  

         alert (ucFirst ("john")); //John  the first letter of word john was capitalize 

         /* Check for Spam 
         To make the search case-sesitive, let's bring the string  to lowercase and then search: */ 
         function checkSpam(str) {
            let lowerStr = str.tolowerCase(); 
            return lowerStr.includes('viagra') || lowerStr.includes('xxx');
         } 

         alert(checkSpam('buy ViAgRA now ')); 
         alert(checkSpam ('free xxxxx')); 
         alert(checkSpam("innocent rabbit"));  

         /n/n/n 

         //for instance 
         let str = "stringify";

         //These are same for substring 
         console.log(str.substring(2,6)); // "ring" 
         console.log(str.substring(6,2)); // "ring" 

         //... but not for slice 

         alert(str.slice(2,6)); //"ring"  (the same) 
         alert(str.slice(6,2)); //"" (an empty string) 

         /*str.substr(start [,length] 
         Returns the part of the string from start, with the given length 
         in contrast with the previous methods, this one allows us to specify the length instead ending position */ 
         let str1 = "stringify"; 
         console.log(str.substring(2,4)); //ring, from the 2nd position get 4 characters 

         //The first argument may be negative, to count from the end: 

         let str2 = "stringify"; 
         console.log(str.substring(-4, 2)); //from the 4th position get 2 characters 


         /*Let's recap these methods to avoid any confusion:  
         Method: slice(start, end)
         selects: from start to end (not including end) 
         negatives: allows negatives 

         method:substring(start, end) 
         selects: between start and end 
         negatives: negatives cvalues mean 0 


         method: substr(start, length) 
         selects: from start get length characters 
         negeatives: allows negatives start  

         
         */



    }
}
Program.main();