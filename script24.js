class Program {
    static main () {
        //Accessing Characters 
        let str = 'Hello';
        //The first character 
        alert( str[0]); 
        alert(str.charAt(0) ); //H 

        //this is used to get the  last character 
        alert(str[str.length - 1 ]); 
        //The square brackets are a modern way of getting a character , while charAt is the historical reasons 
        // The only diffreence btw them is that if no character is found . [] returns and charAt returns an empty string 

        //we can also iterate over characters using for..of 
        for(let char of "Hello") {
            alert(char); //H,e,l,l,o (char becomes "H", then "e", then "l" etc)
        }

    }
}