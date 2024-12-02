class Program{
    static main() {
        let str = "widget with id";

        if (str.indexOf("widget") != -1) {
            console.log("we found it "); //it works  now! 
        }

        //includes, startsWith,endWith  The more modern method str.includes(substr,pos) returns true/false depending  whether str contains substr within 
        console.log("widget with id".includes("widget")); //true 
        console.log("Midget".includes("id",3)); //false , from position 3 there is no "id" 

        //The methods str.startsWith and str.endWith do exactly what they say: 
        console.log("Widget".startsWith("Wid")); //true, "Widget" starts with "wid" 
        console.log("Widget".endsWith("get")); //true, "widget ends with "get" 

        //Getting a substring 
        //There are 3 methods in Javascript to get a substring: substring, substr and slice 
        /*str.slice(start [, end])
        Returns the part of the string from the start to (but not including) end 
        For instance .  */  
        let str2 = "stringify";
        console.log(str2.slice(0,5)); //'strin', the substring from 0  to 5 (not including 5) 
        console.log(str.slice(0, 1)); //'s', from 0 t0 1, but not including 1 so only character 

        //if there is no second argument. then slice goes till the end of the string : 
        let str3 = "stringify"; 
        console.log(str.slice(2)); //ringfy, from the 2nd position till the end 
    }
}