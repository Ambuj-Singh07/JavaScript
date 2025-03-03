const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    //db calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})
 promiseOne.then(function(){
    console.log("promise Consumed");
    
 })

 new Promise(function(resolve, reject){
      setTimeout(function(){
         console.log("Async task 2");
         resolve()

      },1000)

 }).then(function(){
    console.log("async 2 resolved");
    
 })

 const promiseThree = new Promise(function(resolve, reject){
    

    setTimeout(function(){
        resolve({
           username: "Me", email: "me@example.com"    
        })
    },100)
})

promiseThree.then(function(user){
     console.log(user)
     
})

const promiseFour = new Promise(function(resolve, reject){
       setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Ambuj", password: "123"})
        }else{
            reject('Error: Something that wrong')
        }
        
       },1000)
})

promiseFour
.then((user) =>{
       console.log(user);
       return user.username
       
})
.then((username)=>{
     console.log(username);
     
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>{
    console.log(("The promise is either resolved or rejected"));
    
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "MaiAurTum", password: "123@abc"})
        }else{
            reject('Error: js on that wrong')
        } 
    },1000)
})

async function consumePromiseFive() {
   try {
      
     const response = await promiseFive
     console.log(response);
   } catch (error) {
       console.log(error);
       
   }
   
}
consumePromiseFive()
 
// async function getAllUsers() {
//     try {
//         const response=await fetch('https://api.github.com/users/Ambuj-Singh07')
     
        
//     const data =  await response .json()
//      console.log(data);
    
//     } catch (error) {
//         console.log("E:", error);
        
//     }
// }

fetch('https://api.github.com/users/Ambuj-Singh07')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})