// =====================================================
// JAVASCRIPT OPERATORS
// =====================================================


// =====================================================
// 1. ARITHMETIC OPERATORS
// =====================================================

// Definition:
// Arithmetic operators का use mathematical calculations
// करने के लिए किया जाता है.

// Operators:
// +  Addition
// -  Subtraction
// *  Multiplication
// /  Division
// %  Modulus / Remainder
// ** Exponentiation / Power


let a = 10;
let b = 3;

console.log("Addition       :", a + b);
console.log("Subtraction    :", a - b);
console.log("Multiplication :", a * b);
console.log("Division       :", a / b);
console.log("Modulus        :", a % b);
console.log("Power          :", a ** b);


// OUTPUT:
//
// Addition       : 13
// Subtraction    : 7
// Multiplication : 30
// Division       : 3.3333333333333335
// Modulus        : 1
// Power          : 1000



// =====================================================
// 2. ASSIGNMENT OPERATORS
// =====================================================

// Definition:
// Assignment operators का use variable में value
// assign या update करने के लिए किया जाता है.
//
// =   Assign
// +=  Add and assign
// -=  Subtract and assign
// *=  Multiply and assign
// /=  Divide and assign
// %=  Modulus and assign
// **= Power and assign


let x = 10;

console.log("Initial x :", x);

x += 5;
console.log("x += 5 :", x);

x -= 2;
console.log("x -= 2 :", x);

x *= 2;
console.log("x *= 2 :", x);

x /= 2;
console.log("x /= 2 :", x);

x %= 3;
console.log("x %= 3 :", x);

x **= 2;
console.log("x **= 2 :", x);


// OUTPUT:
//
// Initial x : 10
// x += 5 : 15
// x -= 2 : 13
// x *= 2 : 26
// x /= 2 : 13
// x %= 3 : 1
// x **= 2 : 1



// =====================================================
// 3. COMPARISON OPERATORS
// =====================================================

// Definition:
// Comparison operators दो values को compare करते हैं.
// इनका result हमेशा true या false होता है.
//
// ==   Equal to
// ===  Strictly equal
// !=   Not equal
// !==  Strictly not equal
// >    Greater than
// <    Less than
// >=   Greater than or equal
// <=   Less than or equal


let p = 10;
let q = 5;

console.log("p == q  :", p == q);
console.log("p === q :", p === q);
console.log("p != q  :", p != q);
console.log("p !== q :", p !== q);
console.log("p > q   :", p > q);
console.log("p < q   :", p < q);
console.log("p >= q  :", p >= q);
console.log("p <= q  :", p <= q);


// OUTPUT:
//
// p == q  : false
// p === q : false
// p != q  : true
// p !== q : true
// p > q   : true
// p < q   : false
// p >= q  : true
// p <= q  : false



// =====================================================
// 4. == VS ===
// =====================================================

// == केवल value को compare करता है और जरूरत पड़ने पर
// type conversion कर सकता है.
//
// === value और data type दोनों को compare करता है.


let num = 5;
let str = "5";

console.log("5 == '5'  :", num == str);
console.log("5 === '5' :", num === str);


// OUTPUT:
//
// 5 == '5'  : true
// 5 === '5' : false



// =====================================================
// 5. LOGICAL OPERATORS
// =====================================================

// Definition:
// Logical operators का use multiple conditions को
// combine करने के लिए किया जाता है.
//
// &&  AND
// ||  OR
// !   NOT


let age = 20;

// AND
console.log("AND :", age > 18 && age < 25);

// OR
console.log("OR  :", age < 18 || age > 18);

// NOT
console.log("NOT :", !(age > 18));


// OUTPUT:
//
// AND : true
// OR  : true
// NOT : false



// =====================================================
// 6. INCREMENT OPERATORS
// =====================================================

// Definition:
// Increment operator किसी variable की value को 1 से
// increase करता है.
//
// ++a  Pre-increment
// a++  Post-increment


let n = 10;

// Post-increment
console.log("n++ :", n++);
console.log("After n++ :", n);

// Pre-increment
console.log("++n :", ++n);


// OUTPUT:
//
// n++ : 10
// After n++ : 11
// ++n : 12



// =====================================================
// 7. DECREMENT OPERATORS
// =====================================================

// Definition:
// Decrement operator किसी variable की value को 1 से
// decrease करता है.
//
// --a  Pre-decrement
// a--  Post-decrement


let m = 10;

// Pre-decrement
console.log("--m :", --m);

// Post-decrement
console.log("m-- :", m--);

console.log("After m-- :", m);


// OUTPUT:
//
// --m : 9
// m-- : 9
// After m-- : 8



// =====================================================
// 8. STRING OPERATOR
// =====================================================

// Definition:
// + operator का use strings को जोड़ने के लिए भी किया जाता है.
// इसे String Concatenation कहते हैं.


let firstName = "Siddhant";
let lastName = "Rai";

console.log("Full Name :", firstName + " " + lastName);


// OUTPUT:
//
// Full Name : Siddhant Rai



// =====================================================
// 9. TERNARY / CONDITIONAL OPERATOR
// =====================================================

// Definition:
// Ternary operator if-else का short form है.
//
// Syntax:
//
// condition ? trueValue : falseValue;


let studentAge = 20;

let result = studentAge >= 18 ? "Adult" : "Minor";

console.log("Result :", result);


// OUTPUT:
//
// Result : Adult



// =====================================================
// 10. TYPEOF OPERATOR
// =====================================================

// Definition:
// typeof operator किसी value का data type बताता है.


let name = "Siddhant";
let marks = 85;
let isStudent = true;

console.log("Type of name :", typeof name);
console.log("Type of marks :", typeof marks);
console.log("Type of isStudent :", typeof isStudent);


// OUTPUT:
//
// Type of name : string
// Type of marks : number
// Type of isStudent : boolean



// =====================================================
// 11. INSTANCEOF OPERATOR
// =====================================================

// Definition:
// instanceof operator check करता है कि कोई object
// किसी particular class/constructor का instance है या नहीं.


let arr = [];

console.log("arr instanceof Array :", arr instanceof Array);


// OUTPUT:
//
// arr instanceof Array : true



// =====================================================
// 12. NULLISH COALESCING OPERATOR
// =====================================================

// Definition:
// ?? operator तब right-side value देता है जब left-side
// value null या undefined हो.


let username = null;

console.log("Username :", username ?? "Guest");


// OUTPUT:
//
// Username : Guest



// =====================================================
// 13. OPTIONAL CHAINING OPERATOR
// =====================================================

// Definition:
// ?. operator object की property को safely access करता है.
// अगर property मौजूद नहीं है तो error की जगह undefined देता है.


let user = {
    name: "Siddhant"
};

console.log("City :", user.address?.city);


// OUTPUT:
//
// City : undefined



// =====================================================
// 14. BITWISE OPERATORS
// =====================================================

// Definition:
// Bitwise operators numbers के binary bits पर operation
// perform करते हैं.
//
// &   Bitwise AND
// |   Bitwise OR
// ^   Bitwise XOR
// ~   Bitwise NOT
// <<  Left Shift
// >>  Right Shift
// >>> Unsigned Right Shift


let num1 = 5;
let num2 = 3;

console.log("Bitwise AND (&) :", num1 & num2);
console.log("Bitwise OR (|)  :", num1 | num2);
console.log("Bitwise XOR (^) :", num1 ^ num2);
console.log("Bitwise NOT (~) :", ~num1);

console.log("Left Shift (<<)  :", num1 << 1);
console.log("Right Shift (>>) :", num1 >> 1);
console.log("Unsigned Right Shift (>>>) :", num1 >>> 1);


// OUTPUT:
//
// Bitwise AND (&) : 1
// Bitwise OR (|)  : 7
// Bitwise XOR (^) : 6
// Bitwise NOT (~) : -6
// Left Shift (<<) : 10
// Right Shift (>>) : 2
// Unsigned Right Shift (>>>) : 2



// =====================================================
// END
// =====================================================

console.log("===== END OF OPERATORS =====");