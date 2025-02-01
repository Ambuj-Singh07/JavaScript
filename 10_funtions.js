function sayMyName(){
      console.log("A");
      console.log("M");
      console.log("B");
      console.log("U");
      console.log("J");
}

//sayMyName()

// function addTwoNumber(number1, number2){//parameters bolte hai jo box ke andar likhe hai name usko
    
//     console.log(number1 + number2);
// }

// addTwoNumber(8 , 9);// aur arrugument bolte hai jo value call karte time dale hai usko

function addTwoNumber(number1, number2){

     //let result = number1 + number2
     //return result;
     return number1 + number2
     
}
const result = addTwoNumber(8, 9);

//console.log("Result..", result);

function loginUserMessage(username){
    if(!username){
        console.log("please enter the value");
        return;
    }
    return `${username} just logged In`

}

//console.log(loginUserMessage("Aman"));
//console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){ //val1 and val2 means 2 first value are return in val1 and val2;
    return num1;
}

console.log(calculateCartPrice(200, 400, 800));

const user = {
    
    username: "Ambuj Kumar Singh",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject ({
    username: "sam",
    price: 500 
})
const myNewArray = [10, 20, 30, 40]

function returnSecondValue(getArray){
    return getArray[2]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10, 20, 30, 40]));

