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











