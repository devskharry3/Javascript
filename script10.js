class clonecopying{
    static main(){
        let user = {
                    
            name : "john",
                    
            sizes:{
                        
                height: 182,
                        
                width: 50

                    }
                }
                let clone = Object.assign({}, user);
                console.log(user.sizes=== clone.sizes);


                user.sizes.width++;
                console.log(clone.sizes.width);
                
            }
        }
        
        clonecopying.main();