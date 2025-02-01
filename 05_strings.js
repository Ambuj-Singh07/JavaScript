const name = "Ambuj"
const repoCount =100;

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String('Name-As')

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0,4);
console.log(newString);


const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newStringOne = "    Ambuj       ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ambuj.com/ambuj%20Singh"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'));

console.log(gameName.split('-'));

