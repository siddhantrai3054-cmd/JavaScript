// =====================================================
// JAVASCRIPT: IF-ELSE WITH PROMPT
// =====================================================


// -----------------------------------------------------
// 1. prompt()
// -----------------------------------------------------
// Definition:
// prompt() ek JavaScript function hai jo user se
// input lene ke liye popup box show karta hai.
//
// prompt() se milne wali value normally String hoti hai.

//let a = prompt("What is your age?");


// -----------------------------------------------------
// 2. Number.parseInt()
// -----------------------------------------------------
// Definition:
// Number.parseInt() String ko Integer Number me
// convert karta hai.
//
// Example:
// "20"  →  20
// String → Number

//a = Number.parseInt(a);


// -----------------------------------------------------
// 3. if
// -----------------------------------------------------
// Definition:
// if ka use condition check karne ke liye hota hai.
// Agar condition true hoti hai, to if ke andar
// ka code execute hota hai.

// if (a > 0) {

    // alert() user ko popup message show karta hai.
//     alert("This is a valid age");

// }
// 

// -----------------------------------------------------
// 4. else
// -----------------------------------------------------
// Definition:
// else tab execute hota hai jab if ki condition
// false hoti hai.

// else {

//     alert("This is an invalid age");

// }


// =====================================================
// HOW IT WORKS
// =====================================================
//
// User enters 20
//        ↓
// prompt()
//        ↓
// "20" (String)
//        ↓
// Number.parseInt()
//        ↓
// 20 (Number)
//        ↓
// 20 > 0
//        ↓
// true
//        ↓
// "This is a valid age"
//
//
// If user enters -5:
//
// -5 > 0
//    ↓
// false
//    ↓
// "This is an invalid age"
// =====================================================


// =====================================================
// OUTPUT
// =====================================================
//
// If input = 20
// Output = This is a valid age
//
// If input = -5
// Output = This is an invalid age


// prompt()          → User se input leta hai
// parseInt()        → String ko Number me convert karta hai
// if                → Condition true check karta hai
// else              → Condition false hone par chalta hai
// alert()           → Popup message dikhata hai
// >                 → Greater than operator
// =====================================================


alert("enter the value a!")
let a = prompt("enter a is here ")
alert("you are the ")
