const user = {
    username:"Ambuj",
    price : 999,

  welcomeMessage: function(){
      console.log(`${this.username}, welcome my website`);
      console.log(this);
      
  }

}
// user.welcomeMessage()
// user.username ="sam";
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "Ambuj"
//     console.log(this.username); 

// }
// chai()

// const  chai=function(){
//     let username = "Ambuj"
//     console.log(this.username); 

// }
// chai()

const chai = () =>{
    let username = "Ambuj"
    //console.log(this); 

}
chai()

// const addTwo = (num1,num2) =>{

//     return num1 + num2;
// }
// console.log(addTwo(5 ,7))

//const addTwo = (num1,num2) => num1 + num2

//const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username: "ambuj"})

console.log(addTwo(5 ,7))






