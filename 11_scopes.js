//var c = 300;
let a =300;
if (true) {
    let a = 10
    const b = 20
  
    //console.log("Inner: ",a);
    
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Ambuj"

    function two(){
        const website ="Youtube"
        console.log(username);
        
    }
   // console.log(website);
    
    two()
}
//one()

if (true) {
    const username ="Ambuj"

    if(username === "Ambuj"){
        const website = "  Youtube"

       // console.log(username + website);
        
    }
    //console.log (website);
}
//console.log(username);

//**********************Intersiting*************** */


console.log(addOne(5));
function addOne (num){
    return num+1
}

//addTwo()// agar is wale function ko upar declare karnge to instialize nhi hoga niche ho jayega
const addTwo = function(num){
    return num +2

}
console.log(addTwo(9));

