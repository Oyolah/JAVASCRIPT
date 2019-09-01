let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length)
console.log("----------------------------------------")
var newString = myString.replace(/,/g, " ");
console.log(newString)
console.log("----------------------------------------")
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log("----------------------------------------")
favoriteAnimals.push('turtle');
console.log(favoriteAnimals)
console.log("----------------------------------------")
let arr = favoriteAnimals.splice(1, 0, "meerket");
console.log("----------------------------------------")
console.log("My array new value will be 5 since i have add new element in the array")
console.log("----------------------------------------")
console.log(favoriteAnimals)
console.log('The array has a length of: ' + favoriteAnimals.length)
console.log("----------------------------------------")
let arr2 = favoriteAnimals.splice(3, 1,);
console.log(favoriteAnimals)
console.log("----------------------------------------")
var index = favoriteAnimals.indexOf("meerket")
console.log('The item you are looking for is at index: '+ index)

console.log("----------------------------------------")
function adder(a, b, c){
  return(a+b+c);
}
adder(3, 4, 5)
console.log("----------------------------------------")
function colorCar(color) { 
  console.log(color);
}
colorCar('a red car');
console.log("----------------------------------------")
Person = {
  id: 1,
  name: "Eliza",
  age: 18,
  dob: "10/12/2002",
  address: "Athens"
}
console.log(Person)

if (3 === 3) {
    console.log("yes")
} else {
    console.log("no")
}
console.log()







