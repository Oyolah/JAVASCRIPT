
// this is d Q1
let greeting = {english:"Hello", krio:"Kaboh", greek:"Yia-sas"};
console.log(greeting);

// Q2
console.log("I'm awesome");

// Q3
let x;
console.log('The value of my variable x will be: undifined');
console.log(x);
x = 10;
console.log('The value of my variable x will be: 10');
console.log(x);

// Q4
let y = "oyolah";
console.log('The value of my string will be: oyolah');
console.log(y);

// Q5

let z = 7.25;
console.log(z);
 
let a = z.toFixed(0);
console.log(a)
function max(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.max.apply(null, input);
   }

console.log(max([z,a]));

// Q6 Arrays!

let school = [];
console.log("My array is going to display two sqaure brackets");
console.log(school)
let animals = ["Rabbit", "Koala", "Zebra", "Horse"];
console.log(animals)
animals.push("baby pig");
console.log(animals);
// Q7 
let myString = "this is a test";
console.log(myString)
console.log(myString.length);

// Q8
let num1 = 2;
let name = "Eliza";
const zero = null;
let condition = true;
console.log(num1);
console.log(name);
console.log(zero);
console.log(condition);
console.log("My variable types are Number, String, Null and Boolean");
console.log(typeof num1);
console.log(typeof name);
console.log(typeof zero);
console.log(typeof true);
if (num1 === name) {
    console.log("Same Type")
}
else{
    console.log("The variables are not of the same type")
}

// Q9
const r = 7 % 3; // I name my variable r instead of because i have already declare x as a variable before. 
console.log(r);
console.log("% divide 7 by 3 = 2r1") // 7/3 is 2 reminder 1
console.log("% display the reminder as a result") // % = is reminder is the answer.

// Q10

const myNumberandString = ["Samia", "Bah", 32, "Holland", 100 ];
console.log(myNumberandString);

let firstNumber = 6/0;
let secondNumber = 10/0;
if (firstNumber === secondNumber){
    console.log("same number")
}
else{
    console.log("Not equal")
}