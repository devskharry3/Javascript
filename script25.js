class Program{
    static main () {
        //Strings are immutable
        //Meaning strings cant be changed in javascript
        let str = 'Hi'; 
        str[0] = 'h'; //error 
        alert(str[0]); //doesn't work 

        //The usual workaround is to create a whole new string and assign it to str instead one 
        //For instance : 
        let str1 = 'Hi';
        str1 = 'h' + str[1]; //replace the string 
        alert (str1); //hi 
        
        //Changing the Case 
        //Methods to LowerCase() and toUpperCase() change the case 
        alert('Interface'.toUpperCase() ); //INTERFACE
        alert('Interface'.toLowerCase()); //interface 

        //or if we want a singlr character lowercased 
         alert('Interface'[0].toLowerCase()); //i 
         
         //Searching for A Substring 
         /*There are multiple ways to look for a substring within a string 
         str.indexof 
         it looks for the substr in str, starting from the given position pos, and returns where the match was found or -1 if nothing found*/ 
         let str2 = "widget with id";
         console.log(str2.indexOf('Widget')); // 0, because 'widget' is found at the beginning 
         console.log(str2.indexOf('widget')); // -1 not found, the search is case-sensistive 

         alert(str2.indexOf('id')); //1 "id" is found at the position 1 (....idget with id ) 

         /*The optional second parameter allows us to search starting from the given position 
         For instance, the first occurence of "id" is at position 1. To look for the next occurence  
         let start the search from position 2:   */ 

         let str3 = "widget with id ";
         console.log(str3.indexOf('id', 2)) //12

    //if we are interested in nall occurences, we can run indexof in a loop.Every new call with the position after the previous match 
    let str4 = 'As sly as a fox, as strong as an ox ';
    let target = 'as'; //let's look for it  

    let pos = 0; 
    while(true) {
        let foundPos =  str4.indexOf(target, pos) 
        if (foundPos === -1) break; 
        alert(`Found at ${foundPos}`); 
        pos = foundPos + 1; //continue the search from the next position 
    }  

    //The same algorithm can be layed out shorter. 
    let str5 = "As sly as a fox, as strong as an ox"; 
    let target1 = "as"; 

    let pos1 = -1; 
    while ((pos1 == str5.indexOf(target1.pos1 + 1)) !=1 ) {
        console.log(pos1)
    }
    }
}

Program.main()