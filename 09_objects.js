//singleton

//object literal

const mySym = Symbol("key1")
 
const jsUser = {
    name: "Ambuj",
    "full name": "Ambuj Singh",
   [ mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "ambuj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturaday"]

}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "ambuj@chatgpt.com"
//Object.freeze(jsUser);
jsUser.email = "ambuj@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Bhai...");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello bhai..., ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

