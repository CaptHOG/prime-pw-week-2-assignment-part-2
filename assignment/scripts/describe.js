// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Declared variable called name and set it equal to 'Dane' as a string.
// We check if the variable name is equal to 'Mary', if it's true console.log 'Hi, Mary!'. 
// If it's false console.log 'How do you do?'. The variable name has the value 'Dane' so the statement is
// is not true, console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Declared variable called secret with an undefined value. Declared variable called code and set it's value to 123 as a number.
// We check if variable code is equal to number 123, this is true, so the variable secret will be assigned
// a value of 'super' as a string and the variable code will be assigned a new value of itself multiplied by the number 2.
// We then check if the variable code has a value greater than the number 250. The current value of code is 246 so this is not true,
// console.log the value of secret which is 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Declared variable called isStudent and set it's value to true as a boolean. Declared variable age and set it's value to 34 as a number.
// Declared variable zip and set it's value to 55407 as a number. We check if isStudent is true AND if zip is greater than the
// number 80000. Both of these are not true so we then check if isStudent is false OR if age has a value less than the number
// 30. Neither of these are true so we then check if isStudent is equal to the boolean value true. This is true, console.log 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne is set to 'red' and colorTwo is set to 'blue'.
// Should be colorOne = 'blue' and colorTwo = 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX - instructions say colorOne and colorTwo should be set to 'purple' but colorTwo is missing.
// Should add in colorTwo = 'purple'.
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - instructions state "higher than 39 AND if time is greater or equal".
// Should be (temp > 39 && time >= 4).
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - instructions state "We check if age is greater than or equal to minAge".
// Should be (age >= minAge)
if(minAge <= age) {
// FIX - instructions state "it is, so we console.log 'enter'.".
// Should be console.log('enter') for if statement and the console.log for the else statement should be console.log('no entry')
  console.log('no entry');
} else {
  console.log('enter');
}
*/

