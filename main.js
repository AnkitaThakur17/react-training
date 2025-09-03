
//let is block scoped 
if (true) {
  let message = "Hello from inside the block!";
  console.log(message); // "Hello from inside the block!"
}
// console.log(message)//Error here


// could be reassigned
let count = 0; 
count = count + 1;  // value can be reassigned
console.log("Count is:", count); 


//const could not be reassigned
const PI = 3.14159; 
// PI = 3.14;   Error: Assignment to constant variable
console.log("Value of PI is:", PI); // Output: Value of PI is: 3.14159


//Arrow functions
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3)); 

//one line expression
const mul = (a, b) => a * b;
console.log(mul(10, 7));

//Array Destructuring
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;

console.log(first);
console.log(second); 


//Object Destructuring
const user = {
  name: "Ankita",
  age: 22,
  country: "India"
};

const { name, country } = user;

console.log(name);
console.log(country); 

//Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

console.log(combined); 

//copy an object using spread
const user2 = {
  name: "Ankita",
  age: 22
};
const userCopy = { ...user };
console.log(userCopy); 

//convert string to array using spread
const str="Ankita"
console.log([...str])

//add elements using spread
const arr=[2,3,4,5]
const newarr=[1,...arr,6]
console.log(newarr)
console.log(arr)

//pass array as function argument
function sum(a, b, c) {
  return a + b + c;
}
const numb = [10, 20, 30];

console.log(sum(...numb));


//REST operator 
const arr4 = [1, 2, 3, 4, 5];

const [first1, second2, ...rest] = arr;

console.log(first1); 
console.log(second2);
console.log(rest); 

//Template literals
const naam = "Ankita";
const age = 22;

const intro = `My name is ${naam} and I am ${age} years old.`;
console.log(intro);

// multi-line strings using template literals
const poem = `
Roses are red,
Violets are blue,
Template literals
Make life easier for you!`;

console.log(poem);

//expression/function calls inside a string using template literals
const a = 5, b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);

//for/of loop on an array
const n = [10, 20, 30];

for (const num of n) {
  console.log(num);
}

//for/of over a string
const s = "ANKITA"

for(const char of s){
  console.log(char)
}

//Classes
class animal {
  //constructor
  constructor (name,sound){
    this.name = name
    this.sound = sound
  }
  // method inside class
  greet(){
    console.log(
      `Iam ${this.name} and  I ${this.sound}`
    )
  }
}
//objects
const animal1 = new animal("dog", "bark")
animal1.greet()

//promises
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

// string .includes method
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world")); 

// string .startsWith method
let text2 = "Hello world, welcome to the universe.";
console.log(text2.startsWith("Hello"))

//string .endsWith method
let text3 = "Iam ankita"
console.log(text3.endsWith("ankita"))


