//Array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Msdhoni", "jadeja"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//Array Methods

myArr.push(6)
myArr.pop();

//myArr.unshift(6);
//myArr.shift();
console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

//slice ,  splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);


const marvel_heros =["thor", "IronMan", "Spiderman"]
const dc_heros = ["SuperMan", "flash", "batman"];

marvel_heros.push(dc_heros)

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ambuj"))
console.log(Array.from("Ambuj"))
console.log(Array.from({name: "Ambuj"}));//interesting


let score1 =100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3));
