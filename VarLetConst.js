// ==================================================
//              JAVASCRIPT VARIABLES
// ==================================================

// JavaScript me variable declare karne ke 3 main keywords hain:
// 1. var
// 2. let
// 3. const


// ==================================================
//                    1. var
// ==================================================

// var se variable declare kar sakte hain.

var a = 4;
var b = 5;
var c = 7;
var d = 8;

console.log(b); // Output: 5


// ==================================================
//          var ko dobara declare karna
// ==================================================

// var me same variable ko dobara declare kar sakte hain.

var x = 4;
var x = 5;

console.log(x); // Output: 5


// ==================================================
//              var ka Scope
// ==================================================

// var BLOCK SCOPE follow nahi karta.

var number = 4;

{
    var number = 9;
    console.log(number); // Output: 9
}

console.log(number); // Output: 9


// ==================================================
//                    2. let
// ==================================================

// let me same variable ko dobara declare nahi kar sakte.

// let p = 4;
// let p = 5; // ❌ Error

// Lekin let ki value change kar sakte hain.

let p = 4;

p = 10;

console.log(p); // Output: 10


// ==================================================
//              let ka Block Scope
// ==================================================

// let BLOCK SCOPE follow karta hai.

let value = 4;

{
    let value = 9;
    console.log(value); // Output: 9
}

console.log(value); // Output: 4


// ==================================================
//                    3. const
// ==================================================

// const ka use constant value ke liye kiya jata hai.

// const variable ko declare karte time value dena compulsory hai.

const pi = 3.14;

console.log(pi); // Output: 3.14


// ==================================================
//          const ki value change karna
// ==================================================

// const ki value ko change nahi kar sakte.

// const age = 20;
// age = 25; // ❌ Error


// ==================================================
//          const ko dobara declare karna
// ==================================================

// const ko same scope me dobara declare nahi kar sakte.

// const name = "Siddhant";
// const name = "Rahul"; // ❌ Error


// ==================================================
//              const ka Block Scope
// ==================================================

// const bhi BLOCK SCOPE follow karta hai.

const number1 = 10;

{
    const number1 = 20;

    console.log(number1); // Output: 20
}

console.log(number1); // Output: 10


// ==================================================
//                    SUMMARY
// ==================================================

// var:
// ✔ Re-declare kar sakte hain
// ✔ Re-assign kar sakte hain
// ❌ Block scope follow nahi karta


// let:
// ❌ Re-declare nahi kar sakte
// ✔ Re-assign kar sakte hain
// ✔ Block scope follow karta hai


// const:
// ❌ Re-declare nahi kar sakte
// ❌ Re-assign nahi kar sakte
// ✔ Block scope follow karta hai