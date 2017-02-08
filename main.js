// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

// function doSomethingCool() {
//   console.log("Something Cool!");
// }

// Put your answer below -------------------------
var doSomethingCool = function (){
    "use strict";
  console.log("I think I'm anon.");
}

doSomethingCool();
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

// function sayHi() {
//   alert("Hello, World!");
// }
//
// setTimeout(sayHi, 2000);

// Put your answer below -------------------------
  setTimeout(function(){
    alert("Hello World!");
  }, 2000);
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?
//
// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.
//
var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------
 // The logged order is [c].
 // Due to the setTimeout on the 'y', 'z' is overriding 'y' due to the stack queue.

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

// var reverseStr = function(str) {
//   var arr;
//   arr = str.split("");
//   arr = arr.reverse();
//   str = arr.join("");
//   return str;
// };

// Put your answer below -------------------------
var reverseStr = function(str) {
  return str.split("").reverse().join("");
};

console.log(reverseStr("hello"));

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

// var spanishColor = function(colorName) {
//   if (colorName.toLowerCase() === "rojo") {
//     return "#ff0000";
//   }
//   else if (colorName.toLowerCase() === "blanco") {
//     return "#ffffff";
//   }
//   else if (colorName.toLowerCase() === "azul") {
//     return "#0000ff";
//   }
//   else if (colorName.toLowerCase() === "verde") {
//     return "#00ff00";
//   }
//   else if (colorName.toLowerCase() === "negro") {
//     return "#000000";
//   }
// };

// Put your answer below -------------------------
var spanishColor = {
    rojo: "#ff0000",
    blanco: "#ffffff",
    azul: "#0000ff",
    verde: "#00ff00",
    negro: "#000000",
  };

console.log(spanishColor['verde']);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

// var foo = "bar";

// Put your answer below -------------------------
var foo;

foo = "bar";
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

// var callTenTimes = function(callback) {
// 	for(var i = 0; i < 10; i++){
// 		callback();
// 	}
// };
// Put your answer below -------------------------

function callNtimes(callback, j) {
  for (var i = 0; i < j; i++) {
    callback();
  }
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

// var score = 0;
//
// var increaseScore = function() {
//   score++;
// };
//
// var decreaseScore = function() {
//   score--;
// };
//
// // Put your answer below -------------------------
//
(function() {

  var score = 0;

  var increaseScore = function() {
    score++;
  };

  var decreaseScore = function() {
    score--;
};

})();

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

// var addNumbers = function(numberA, numberB) {
//   console.log(numberA + numberB);
// };
//
// var twoPlusTwo = addNumbers(2,2);
//
// // Put your answer below -------------------------
var addNumbers = function(numberA, numberB) {
  return numberA + numberB;
};

var twoPlusTwo = addNumbers(2,2);
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

// var speed = 0;
//
// var accelerate = function(amount) {
//   speed += amount;
// };


// Put your answer below -------------------------

// The NaN is actually showing up as undefined within my console.
// It is showing up this way because the parameter of amount is not being met
// with a value.

var speed = 0;

var accelerate = function(amount) {

  if(amount = 'undefined'){
    amount = 1;
    speed += amount;
  } else {
    speed += amount;
  }
 return speed;
};

console.log(accelerate());

// -----------------------------------------------
