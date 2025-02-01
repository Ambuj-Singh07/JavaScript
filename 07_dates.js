let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);

//let myCreatedDate = new Date(2025, 0,  13)
//let myCreatedDate = new Date(2025, 0,  13, 5, 3)
let myCreatedDate = new Date("2025-01-12")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let  newDate= new Date ()
console.log(newDate);
//console.log(newDate.getMonth());
//console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long" ,   
})




