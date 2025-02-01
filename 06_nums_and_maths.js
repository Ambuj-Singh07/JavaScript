const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber= 1120.8989

console.log(otherNumber.toPrecision(4));

const  hundreds = 1000000;
console.log(hundreds.toLocaleString('en-In'));


//*************************** Maths *******************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.max(2, 9, 8, 7));
console.log(Math.min(3, 1, 0, 10));

console.log(Math.random());
console.log((Math.random()*10) +1);

const min = 10
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1))+min);




