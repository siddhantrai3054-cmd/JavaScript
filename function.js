// =====================================================
// JAVASCRIPT FUNCTIONS
// =====================================================


// =====================================================
// 1. NORMAL FUNCTION
// =====================================================

// Definition:
// Function ek reusable block of code hota hai
// jo kisi specific task ko perform karta hai.
//
// Function ko ek baar banakar hum use multiple times
// call kar sakte hain.
//
// Syntax:
//
// function functionName(parameters) {
//     // code
//     return value;
// }


// Function Declaration

function oneplusAvg(x, y) {

    // x aur y ka average calculate kar rahe hain
    // aur usme 1 add kar rahe hain.

    return 1 + (x + y) / 2;
}


// =====================================================
// 2. ARROW FUNCTION
// =====================================================

// Definition:
// Arrow function function likhne ka ek shorter
// aur modern way hai.
//
// Syntax:
//
// const functionName = (parameters) => {
//     // code
// };


// Arrow Function

const sum = (p, q) => {

    console.log("Hey, how are you? I am too fine yaar");

};


// =====================================================
// 3. VARIABLES
// =====================================================

let a = 1;
let b = 2;
let c = 3;


// =====================================================
// 4. FUNCTION CALL
// =====================================================

// oneplusAvg() function ko call kar rahe hain.

console.log(
    "One plus Average of a and b is:",
    oneplusAvg(a, b)
);


// Output:
// One plus Average of a and b is: 2.5


console.log(
    "One plus Average of b and c is:",
    oneplusAvg(b, c)
);


// Output:
// One plus Average of b and c is: 3.5


console.log(
    "One plus Average of a and c is:",
    oneplusAvg(a, c)
);


// Output:
// One plus Average of a and c is: 3


// =====================================================
// 5. ARROW FUNCTION CALL
// =====================================================

console.log(sum(8, 3));


// First sum() function ke andar ka message print hoga:
//
// Hey, how are you? I am too fine yaar
//
// Lekin sum() function ke andar return nahi hai,
// isliye function ki return value undefined hai.
//
// Therefore console.log(sum(8, 3)) ka final output:
//
// undefined