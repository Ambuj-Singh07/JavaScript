let score = "122abc"
let score2 = null;

console.log(typeof score);//string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//number data type
console.log(valueInNumber);
console.log(typeof score2);//object

//"33" => 33
// "123abc" => Nan
// true=> 1; False = 0;

let isLoggenIn = 1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true ; 0 => false;
//" " => 0;
// "Ambuj" => True;

let SomeNumber = 44
let stringNumber= String(SomeNumber)
console.log(stringNumber);

console.log( typeof stringNumber);// string datatype


//************************* Operations ****************

let str1="hello"
let str2="Ambuj"

let str3= str1+str2;
console.log (str3);

console.log("1" + 2);// Output 12
console.log(1+ "2");// Output 12
console.log("1" + 2 +2);// Output 122
console.log(1 + 2 + "2");// Output 32// because first operation 1 and 2 are add and now check 3 and 3 are as it is write so result is 32;

console.log(true);

let gameCounter= 100;
gameCounter++;
console.log(gameCounter);// Output  101
