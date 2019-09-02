let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length)


var newString = myString.replace(/,/g, " ");
console.log(newString)


let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];


favoriteAnimals.push('turtle');
console.log(favoriteAnimals)


let arr = favoriteAnimals.splice(1, 0, "meerket");


console.log("My array new value will be 5 since i have add new element in the array")


console.log(favoriteAnimals)
console.log('The array has a length of: ' + favoriteAnimals.length)


let arr2 = favoriteAnimals.splice(3, 1,);
console.log(favoriteAnimals)


var index = favoriteAnimals.indexOf("meerket")
console.log('The item you are looking for is at index: '+ index)


function adder(a, b, c){
  return(a+b+c);
}
adder(3, 4, 5)


function colorCar(color) { 
  console.log(color);
}
colorCar('a red car');


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

// Q12 // empty object
let object = {

}

// Q13-14
let teachers = {
  Zohir: 'Htmlcss',
  Mohamed: 'JavaScript',
  John: 'Javascript'
}
console.log(teachers)

// Q 15
let x = [1,2,3];
    let y = [1,2,3];
    let z = y;
   x == y,

    console.log(x == y) // false
    console.log(x === y) // false
  console.log(z == y)  // true
  console.log(z == x)  //false

// Q 17
  let bar = 42;
typeof typeof bar; // it returns 'string'.
     






