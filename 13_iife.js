//Immediately Invoked Function Expression(IIFE)

(function chai(){
    //named iife
   console.log("Database Connected");
   
})();

( (name) =>{
       // simple chai
    console.log(`Db Connected ${name}`);
    
})("Ambuj");
