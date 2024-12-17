console.log("hELLO WORLD!");

// 1. VARIABLE
let name3; // simple definition
let email = "mhulodjiotsa@gmail.com"; // this string
let num1 = 4; // this is integer
let isGood = true; // this boolean | camelcase
let caMark = 23.5; // this is float
let Phonenumber = 768300484434; // is not good start with lowercase and use camel case

// 2. COMMENT
/*  Block comment /* you can use multiple lines  */
// line comment

// 3. OPERATIONS (+,-,/,%)
let a = 4;
let b = 2;
let sum = a + b;
let diff = a - b;
let prod = a * b;
let quotien = a / b;
console.log("The sum of a and b is " + sum);
console.log("diff\t=\t", diff);
console.log("Prod\t=\t", prod);
console.log("quotien\t=\t", quotien);

// 4. STRING OPERATION
console.log("This is" + " good");

// 5. CONDITIONALS
if (a > b) {
  console.log(" a > b");
} else if (a < b) {
  console.log("a < b");
} else {
  console.log(" a === b ");
}

// logical condition: ||, &&, !=
let password = "password";

if (email == "mhulodjiotsa@gmail.com" && password == "password") {
  console.log("User exists and is authenticated!");
} else if (email == "mhulodjiotsa@gmail.com" && password != "password") {
  console.log("Invalid password!");
} else {
  console.log("Invalid email or password!");
}

// switch
let number = 3;

switch (number) {
  case 1: // number =1
    console.log("Number is 1");
    break;
  case 2: // number =2
    console.log("Number is 2");
    break;
  default: // Number is neither 1 nor 2
    console.log("Number is neither 1 nor 2");
    break;
}

// 6. ARRAY AND OBJECTS
// ARRAY
let evenNumbers = [2, 4, 6, 8, undefined, null];
let fruits = ["pawpaw", "banana", "fufu", "coconut"];
console.log(fruits);
// task delete fufu from the list using splice
fruits.splice(2, 1); // remove one element from index 2
console.log("After removing fufu from the list: ", fruits);

// OBJECT
console.clear();
let footballPlayer = {
  // attribute or properties
  name: "Vincent Aboubakar",
  age: 32,
  nickName: "AbouBae",
  position: "center-Forward",
  club: "Sivar Spor",
  nationality: "Cameroonian",
  // method
  transfer: function (newClub) {
    this.club = newClub;
    console.log(this.nickName + " was transferred to " + newClub);
  },
};
console.log(footballPlayer.club);
footballPlayer.transfer("Man U");
console.log(footballPlayer.club);

// task delete the age attribute
const { name, nickName, position, club, nationality, transfer } =
  footballPlayer;

footballPlayer = { name, nickName, position, club, nationality, transfer };
footballPlayer.transfer("Cotton Sport");
console.clear()


// 7. LOOPS
/* 
    -starting point
    -change
    -conditions
*/

let startDay = 1;
let endDay = 3;
// for (let i = startDay; i <= endDay; i++) {
//   // method 1
//   if (i == 1) {
//     console.log("im in day " + i + " of bootcamp! I'm learning Javascript!");
//   } else if (i === 2) {
//     console.log("im in day " + i + " of bootcamp! I'm learning ReactJs!");
//   } else if (i == 3) {
//     console.log("im in day " + i + " of bootcamp! I'm learning React Native!");
//   }
// }

console.clear();

// 8. FUNCTIONS
function add(a, b=0) {
  return a + b;
}

console.log(add(1))

/* TODO READ and practice ABOUT :
    * ARRAY References
    * Template literals
*/
