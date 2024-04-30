// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

let greet = (name)=>{
    return `Hello, ${name}!`;
}


console.log(greet("Salman"))

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

 let sum = (num1 , num2)=>{
    return num1 + num2
 }

 console.log(sum(2,2))


// Q3) Write a simple arrow function that squares a number.
 
let squares = (num)=>{
    return num**2
}

console.log(squares(4))



// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

let squaresArray = (sArray)=>{
   return sArray.map((n) => n ** 2);
}

let beforeSquares = [2,4,6,8];
let afterSquares = squaresArray(beforeSquares);
console.log(afterSquares)