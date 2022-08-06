console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
};
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
};
// Remember to call the function to test
console.log('Test- should say "Hello, name provided!"', helloName('Kyle'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
};

console.log('Test- should return the sum of provided numbers:', addNumbers(7,8));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNum, secondNum, thirdNum) {
  return firstNum * secondNum * thirdNum;
};

console.log('Test - should return the 3 numbers multiplied:', multiplyThree(3,4,5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0){
    return true;
  }
  else{
    return false;
  }
};

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return undefined;
  }
  else {
    return array[array.length - 1];
  }

};
console.log('Test - should return 7', getLast([4, 3, 6, 7]))
console.log('Test- should return undefined', getLast([]));
console.log('Test - should return D', getLast(['A', 'B', 'C', 'D']));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log('Test - should return false', find(5, [1, 2, 3, 4]));
console.log('Test - should return true', find(('B'), ['A', 'B', 'C', 'D']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter){
    return true;
  }
  return false;
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  for (let num of array) {
    sum += num;
  }
  
  // TODO: loop to add items
  return sum;
};
console.log('Test- should return 6', sumAll([1, 2, 3]));
console.log('Test- should return 4', sumAll([-1, 2, 3]));
console.log('Test- should return 0', sumAll([]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function keepItPos(array){
  let newArr = [];
  for (let num of array) {
    if (num > 0){
      newArr.push(num);
    }
  }
  return newArr;
};
let test = [1, 2, 3];
console.log('Test - should return []', keepItPos([-1, 0, -5]));
console.log('Test - should return [7, 2]', keepItPos([-1, 7, 2]));
console.log('Test - should return [1]', keepItPos([1, 0, -5]));
console.log('Test - should return [1, 2, 3]', keepItPos(test), test);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
