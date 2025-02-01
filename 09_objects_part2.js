// singleton objects
const tinderUser = new Object()

tinderUser.id= "123abc"
tinderUser.name= "Ram.."
tinderUser.isLoggedIn= false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userFullname:{
             firstname: "Ambuj",
             lastname: "singh"
        }
    }
}
//console.log(regularUser.fullname.userFullname.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}

//const obj3= Object.assign({},obj1, obj2,obj4)
const obj3={...obj1,...obj2}
//console.log(obj3);

const users =[
    {
        id: 1,
        email: "marwadi@gmail.com"
   },
   {
    id: 2,
    email: "marwadi@gmail.com"
   },
   {
    id: 3,
    email: "marwadi@gmail.com"
   }
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ambuj"
}
// course.courseInstructor

//const {courseInstructor} = course // structure 
const {courseInstructor : instructor} = course //de- structured

// console.log(courseInstructor);
console.log(instructor);

//json Api brief definition

// {
//     "name" = "Ambuj",
//      "price" = "free",
//       "coursename" = "js in hindi";
// }

